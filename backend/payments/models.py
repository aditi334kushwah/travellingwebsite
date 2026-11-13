from django.db import models
from django.conf import settings
from booking.models import Booking


class Payment(models.Model):
    STATUS_CHOICES = (
        ("created", "Created"),
        ("pending", "Pending"),
        ("successful", "Successful"),
        ("failed", "Failed"),
        ("refunded", "Refunded"),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="payments"
    )
    booking = models.ForeignKey(
        Booking,
        on_delete=models.CASCADE,
        related_name="payments"
    )
    razorpay_order_id = models.CharField(max_length=100, unique=True, db_index=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True, unique=True, db_index=True)
    razorpay_signature = models.CharField(max_length=255, blank=True, null=True)

    # Server-verified amount in INR (e.g. 5000.00)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=10, default="INR")

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="created")
    payment_method = models.CharField(max_length=50, blank=True, null=True)  # upi, card, netbanking, etc.
    error_code = models.CharField(max_length=100, blank=True, null=True)
    error_description = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Payment"
        verbose_name_plural = "Payments"

    def __str__(self):
        return f"Payment #{self.id} - Order {self.razorpay_order_id} - {self.status.upper()}"
