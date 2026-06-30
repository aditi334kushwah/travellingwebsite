
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.core.mail import EmailMultiAlternatives

from .models import Booking
from .serializers import BookingSerializer
from accounts.authentication import JWTauthentication


class BookingCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentication]
    permission_classes = [IsAuthenticated]

    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def perform_create(self, serializer):

        booking = serializer.save()

        user = self.request.user

        email = EmailMultiAlternatives(
            subject="Booking Confirmed",
            body="Your booking has been confirmed",
            from_email="aaditikkushwah12530@gmail.com",
            to=[booking.email]
        )

        html_content = f"""
            <h2>Booking Confirmed</h2>

            <p>Hello {booking.name}</p>

            <p>Your booking has been confirmed.</p>

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

        try:
            email.send()
        except Exception as e:
            print("Email sending failed:", repr(e))

    