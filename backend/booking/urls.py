from django.urls import path
from .views import BookingListCreateView, RazorpayCreateOrderView, RazorpayVerifyPaymentView


urlpatterns = [
    path("", BookingListCreateView.as_view(), name="booking-list-create"),
    path("razorpay/order/", RazorpayCreateOrderView.as_view(), name="razorpay-create-order"),
    path("razorpay/verify/", RazorpayVerifyPaymentView.as_view(), name="razorpay-verify-payment"),
]