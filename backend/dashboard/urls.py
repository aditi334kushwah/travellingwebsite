from rest_framework.routers import DefaultRouter
from .views import  DashboardStatsView, RecentActivityView
from django.urls import path, include

# router = DefaultRouter()
# router.register(r'bookings', BookingViewSet, basename="booking")

urlpatterns = [
    path("stats/", DashboardStatsView.as_view(), name="dashboard"),
    path("recent-activity/", RecentActivityView.as_view(), name="recent-activity"),
]

# urlpatterns += router.urls