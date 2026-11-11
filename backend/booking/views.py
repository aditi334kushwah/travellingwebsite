
import threading
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.core.mail import EmailMultiAlternatives

from .models import Booking
from .serializers import BookingSerializer
from accounts.authentication import JWTauthentication


def send_booking_email_async(booking):
    try:
        package_title = booking.package.title if booking.package else "Scenic Travel Experience"
        package_code = (booking.package.package_code or f"PKG-{booking.package.id}") if booking.package else "N/A"
        package_location = booking.package.location if booking.package else ""
        booking_ref = f"#TRIP-{str(booking.id).zfill(6)}"
        
        # Calculate total
        try:
            rate = float(booking.budget_per_person or 0)
            guests = int(booking.number_of_people or 1)
            total_amt = f"₹{int(rate * guests):,}"
            rate_display = f"₹{rate:,.0f}" if rate.is_integer() else f"₹{rate:,.2f}"
        except Exception:
            rate_display = f"₹{booking.budget_per_person}"
            total_amt = "₹N/A"

        email = EmailMultiAlternatives(
            subject=f"Trip Voucher Confirmed - {booking_ref} | TripNova",
            body=f"Your booking for {package_title} (ID: {package_code}) has been confirmed. Booking Reference: {booking_ref}.",
            from_email="aaditikkushwah12530@gmail.com",
            to=[booking.email]
        )

        html_content = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 24px;
      color: #0f172a;
    }}
    .voucher-card {{
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }}
    .voucher-header {{
      background: linear-gradient(135deg, #ea580c, #f97316);
      padding: 24px 30px;
      color: #ffffff;
    }}
    .brand-title {{
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
    }}
    .badge {{
      display: inline-block;
      background: rgba(255,255,255,0.25);
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 12px;
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .body-content {{
      padding: 30px;
    }}
    .ref-bar {{
      display: flex;
      justify-content: space-between;
      border-bottom: 2px dashed #e2e8f0;
      padding-bottom: 14px;
      margin-bottom: 20px;
      font-size: 12px;
      color: #64748b;
    }}
    .pkg-box {{
      background: #fff7ed;
      border: 1px solid #fed7aa;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 24px;
    }}
    .pkg-code {{
      display: inline-block;
      background: #ffedd5;
      color: #c2410c;
      font-family: monospace;
      font-weight: 700;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 6px;
      float: right;
    }}
    .pkg-title {{
      font-size: 20px;
      font-weight: 700;
      color: #9a3412;
      margin: 0 0 4px 0;
    }}
    .pkg-loc {{
      font-size: 13px;
      color: #7c2d12;
      margin: 0;
    }}
    .info-table {{
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }}
    .info-table td {{
      padding: 10px 12px;
      font-size: 13px;
      border-bottom: 1px solid #f1f5f9;
    }}
    .info-table td.label {{
      color: #64748b;
      font-weight: 600;
      width: 40%;
    }}
    .info-table td.value {{
      color: #0f172a;
      font-weight: 700;
    }}
    .total-box {{
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px 20px;
      margin-top: 10px;
    }}
    .total-title {{
      font-size: 13px;
      font-weight: 600;
      color: #475569;
    }}
    .total-amount {{
      font-size: 22px;
      font-weight: 800;
      color: #ea580c;
      float: right;
    }}
    .footer-note {{
      text-align: center;
      padding: 20px 30px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #94a3b8;
    }}
  </style>
</head>
<body>
  <div class="voucher-card">
    <div class="voucher-header">
      <h1 class="brand-title">TripNova</h1>
      <span class="badge">Official Travel Voucher / Slip</span>
    </div>

    <div class="body-content">
      <div class="ref-bar">
        <span>Reference: <strong>{booking_ref}</strong></span>
        <span style="color: #16a34a; font-weight: 700;">CONFIRMED</span>
      </div>

      <div class="pkg-box">
        <span class="pkg-code">{package_code}</span>
        <h2 class="pkg-title">{package_title}</h2>
        <p class="pkg-loc">&#128205; {package_location or 'India'}</p>
      </div>

      <table class="info-table">
        <tr>
          <td class="label">Primary Traveler:</td>
          <td class="value">{booking.name}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td class="value">{booking.email}</td>
        </tr>
        <tr>
          <td class="label">Contact Phone:</td>
          <td class="value">{booking.phone}</td>
        </tr>
        <tr>
          <td class="label">Country:</td>
          <td class="value">{booking.country}</td>
        </tr>
        <tr>
          <td class="label">Travel Month:</td>
          <td class="value">{booking.travel_month}</td>
        </tr>
        <tr>
          <td class="label">Total Guests:</td>
          <td class="value">{booking.number_of_people} Person(s)</td>
        </tr>
        <tr>
          <td class="label">Rate per Person:</td>
          <td class="value">{rate_display}</td>
        </tr>
        {f'<tr><td class="label">Special Instructions:</td><td class="value">{booking.special_requirements}</td></tr>' if booking.special_requirements else ''}
      </table>

      <div class="total-box">
        <span class="total-title">Total Estimated Amount</span>
        <span class="total-amount">{total_amt}</span>
        <div style="clear: both;"></div>
      </div>
    </div>

    <div class="footer-note">
      <p style="margin: 0 0 4px 0;">Please present this official slip or booking reference upon arrival.</p>
      <p style="margin: 0; color: #64748b; font-weight: 600;">TripNova Travel Concierge &bull; support@tripnova.com</p>
    </div>
  </div>
</body>
</html>
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

        