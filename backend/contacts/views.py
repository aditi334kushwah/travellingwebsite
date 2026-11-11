

import threading
from django.core.mail import EmailMultiAlternatives
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Contact
from .serializers import ContactSerializer
from accounts.authentication import JWTauthentication


def send_contact_email_async(contact, user):
    try:
        user_name = (user.first_name if hasattr(user, 'first_name') and user.first_name else '') or contact.name or 'Traveler'
        email = EmailMultiAlternatives(
            subject="Message Received - TripNova",
            body="Thank you for contacting TripNova.",
            from_email="aaditikkushwah12530@gmail.com",
            to=[contact.email]
        )

        html_content = f"""
        <h2>Thank You For Contacting Us</h2>

        <p>Hello {user_name},</p>

        <p>We have received your message and our travel team is on it.</p>

        <p><strong>Subject:</strong> {contact.subject}</p>

        <p><strong>Message:</strong> {contact.message}</p>

        <p>Our dedicated travel concierge will reach out to you within 24 hours.</p>

        <br>

        <p>Warm regards,<br>TripNova Team</p>
        """
        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=True)
    except Exception as e:
        print("Contact email send failed:", repr(e))


class ContactCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentication]
    permission_classes = [IsAuthenticated]

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        contact = serializer.save()
        user = self.request.user
        
        # Send in background thread so API response is instant
        thread = threading.Thread(target=send_contact_email_async, args=(contact, user))
        thread.daemon = True
        thread.start()

        email.attach_alternative(
            html_content,
            "text/html"
        )

        try :
            email.send()
        except Exception as e:
            print("Email sending failed:", repr(e))
