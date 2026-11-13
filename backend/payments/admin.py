from django.contrib import admin
from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "booking",
        "amount",
        "currency",
        "status",
        "payment_method",
        "razorpay_order_id",
        "razorpay_payment_id",
        "created_at",
    )
    list_filter = ("status", "currency", "payment_method", "created_at")
    search_fields = ("razorpay_order_id", "razorpay_payment_id", "user__username", "user__email", "booking__name")
    readonly_fields = ("created_at", "updated_at")
