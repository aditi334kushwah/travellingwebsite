from rest_framework import serializers
from .models import Payment
from booking.serializers import BookingSerializer


class PaymentSerializer(serializers.ModelSerializer):
    booking_details = BookingSerializer(source="booking", read_only=True)

    class Meta:
        model = Payment
        fields = [
            "id",
            "user",
            "booking",
            "booking_details",
            "razorpay_order_id",
            "razorpay_payment_id",
            "amount",
            "currency",
            "status",
            "payment_method",
            "created_at",
            "updated_at",
        ]
        read_only_fields = fields

