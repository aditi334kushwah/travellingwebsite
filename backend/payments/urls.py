from django.urls import path
from .views import (
    CreateRazorpayOrderView,
    VerifyRazorpayPaymentView,
    RazorpayWebhookView,
    PaymentHistoryView,
)

urlpatterns = [
    path("create-order/", CreateRazorpayOrderView.as_view(), name="payment-create-order"),
    path("verify/", VerifyRazorpayPaymentView.as_view(), name="payment-verify"),
    path("webhook/", RazorpayWebhookView.as_view(), name="payment-webhook"),
    path("history/", PaymentHistoryView.as_view(), name="payment-history"),
]

