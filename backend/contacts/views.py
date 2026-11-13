

import os
import threading
from django.core.mail import EmailMultiAlternatives
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Contact
from .serializers import ContactSerializer
from accounts.authentication import JWTauthentication


def send_contact_email_async(contact, user):
    owner_email = os.getenv("EMAIL_ADDRESS", "aaditikkushwah12530@gmail.com")
    user_name = (user.first_name if hasattr(user, 'first_name') and user.first_name else '') or contact.name or 'Traveler'
    user_email = contact.email
    user_phone = contact.phone_number or "Not Provided"
    user_subject = contact.subject or "General Inquiry"
    user_message = contact.message or ""

    # 1. Admin / Owner Notification Email (User ki query direct aapke email par)
    try:
        admin_subject = f"🔔 New Customer Query from {user_name} - {user_subject} | TripNova"
        admin_text = f"You received a new inquiry from {user_name} ({user_email}, Phone: {user_phone}):\n\nSubject: {user_subject}\n\nMessage:\n{user_message}"
        admin_html = f"""
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 24px; color: #111827;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #ea580c, #d97706); padding: 20px 24px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px;">TripNova - New Customer Inquiry</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Someone submitted a message on the Contact Page</p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 35%;">Customer Name:</td>
                  <td style="padding: 8px 0; font-weight: bold; font-size: 14px; color: #111827;">{user_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Customer Email:</td>
                  <td style="padding: 8px 0; font-weight: bold; font-size: 14px; color: #ea580c;"><a href="mailto:{user_email}" style="color: #ea580c; text-decoration: none;">{user_email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Contact Phone:</td>
                  <td style="padding: 8px 0; font-weight: bold; font-size: 14px; color: #111827;">{user_phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Inquiry Subject:</td>
                  <td style="padding: 8px 0; font-weight: bold; font-size: 14px; color: #111827;">{user_subject}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #fff7ed; border-left: 4px solid #ea580c; border-radius: 8px;">
                <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: bold; color: #9a3412; text-transform: uppercase;">Customer Message:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap;">{user_message}</p>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 12px 24px; text-align: center; font-size: 12px; color: #6b7280;">
              TripNova Concierge Portal &bull; You can reply directly to <a href="mailto:{user_email}" style="color: #ea580c;">{user_email}</a>
            </div>
          </div>
        </body>
        </html>
        """
        admin_mail = EmailMultiAlternatives(
            subject=admin_subject,
            body=admin_text,
            from_email=owner_email,
            to=[owner_email],
            reply_to=[user_email]
        )
        admin_mail.attach_alternative(admin_html, "text/html")
        admin_mail.send(fail_silently=True)
    except Exception as e:
        print("Admin inquiry email notification failed:", repr(e))

    # 2. Customer Confirmation Email (Aapki taraf se traveler ko confirmation acknowledgment)
    try:
        user_mail = EmailMultiAlternatives(
            subject=f"We received your message - {user_subject} | TripNova",
            body=f"Hello {user_name},\n\nThank you for reaching out to TripNova. We have received your query and our travel team will get in touch within 24 hours.",
            from_email=owner_email,
            to=[user_email]
        )
        user_html = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 24px; color: #111827;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #ea580c, #d97706); padding: 20px 24px; color: #ffffff;">
              <h2 style="margin: 0;">TripNova Travel Concierge</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px;">Thank You for contacting us</p>
            </div>
            <div style="padding: 24px;">
              <p style="font-size: 15px; margin: 0 0 12px 0;">Hello <strong>{user_name}</strong>,</p>
              <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">We have received your message regarding <strong>"{user_subject}"</strong>. Our travel advisors are reviewing your inquiry and will reach out to you within 24 hours with custom itineraries and assistance.</p>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; margin: 18px 0;">
                <p style="margin: 0 0 4px 0; font-size: 12px; color: #64748b; font-weight: bold;">YOUR SUBMITTED MESSAGE:</p>
                <p style="margin: 0; font-size: 13px; color: #334155;">{user_message}</p>
              </div>
              <p style="font-size: 13px; color: #6b7280; margin: 0;">Warm regards,<br><strong>TripNova Team</strong><br>concierge@tripnova.com</p>
            </div>
          </div>
        </body>
        </html>
        """
        user_mail.attach_alternative(user_html, "text/html")
        user_mail.send(fail_silently=True)
    except Exception as e:
        print("Customer acknowledgment email send failed:", repr(e))


class ContactCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentication]
    permission_classes = [IsAuthenticated]

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(
                {"success": True, "message": "Message sent successfully!", "data": serializer.data},
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except Exception as e:
            import traceback
            traceback.print_exc()
            return Response(
                {"success": False, "error": str(e), "detail": getattr(e, "detail", str(e))},
                status=status.HTTP_400_BAD_REQUEST
            )

    def perform_create(self, serializer):
        contact = serializer.save()
        user = self.request.user if self.request.user and self.request.user.is_authenticated else None
        
        # Send in background daemon thread so HTTP response responds instantly
        try:
            thread = threading.Thread(target=send_contact_email_async, args=(contact, user))
            thread.daemon = True
            thread.start()
        except Exception as e:
            print("Failed to start contact email thread:", repr(e))
