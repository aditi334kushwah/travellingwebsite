

from django.core.mail import EmailMultiAlternatives
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Contact
from .serializers import ContactSerializer

from accounts.authentication import JWTauthentication


class ContactCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentication]
    permission_classes = [IsAuthenticated]

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):

        contact = serializer.save()

        user = self.request.user

        email = EmailMultiAlternatives(
            subject="Message Received",
            body="Thank you for contacting TripNova.",
            from_email="aaditikkushwah12530@gmail.com",
            to=[contact.email]
        )

        html_content = f"""
        <h2>Thank You For Contacting Us</h2>

        <p>Hello {user.first_name}</p>

        <p>We have received your message.</p>

        <p><strong>Subject:</strong> {contact.subject}</p>

        <p><strong>Message:</strong> {contact.message}</p>

        <p>Our team will contact you soon.</p>

        <br>

        <p>TripNova Team</p>
        """

        email.attach_alternative(
            html_content,
            "text/html"
        )

        try :
            email.send()
        except Exception as e:
            print("Email sending failed:", repr(e))
