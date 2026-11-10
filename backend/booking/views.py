
import threading
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.core.mail import EmailMultiAlternatives

from .models import Booking
from .serializers import BookingSerializer
from accounts.authentication import JWTauthentication


def send_booking_email_async(booking):
    try:
        email = EmailMultiAlternatives(
            subject="Booking Confirmed - TripNova",
            body="Your booking has been confirmed",
            from_email="aaditikkushwah12530@gmail.com",
            to=[booking.email]
        )

        package_title = booking.package.title if booking.package else "Custom Package"
        package_code = (booking.package.package_code or f"PKG-{booking.package.id}") if booking.package else "N/A"
        package_location = booking.package.location if booking.package else "N/A"

        html_content = f"""
            <h2>Booking Confirmed</h2>

            <p>Hello {booking.name}</p>

            <p>Your booking has been confirmed for: <strong>{package_title}</strong></p>
            <p><strong>Package Code:</strong> {package_code}</p>

            <p>Location: {package_location}</p>

            <p>Country: {booking.country}</p>

            <p>Travel Month: {booking.travel_month}</p>

            <p>Number of People: {booking.number_of_people}</p>

            <p>Budget Per Person: ₹{booking.budget_per_person}</p>

            <p>Thank you for choosing TripNova.</p>
        """
        email.attach_alternative(
            html_content,
            "text/html"
        )
        email.send(fail_silently=True)
    except Exception as e:
        print("Email sending failed:", repr(e))


class BookingListCreateView(generics.ListCreateAPIView):

    authentication_classes = [JWTauthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = BookingSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff or user.is_superuser:
            return Booking.objects.all().order_by('-created_at')
        return Booking.objects.filter(user=user).order_by('-created_at')

    def perform_create(self, serializer):
        booking = serializer.save(user=self.request.user)

        # Run email sending in background thread so request responds instantly
        email_thread = threading.Thread(target=send_booking_email_async, args=(booking,))
        email_thread.daemon = True
        email_thread.start()

        