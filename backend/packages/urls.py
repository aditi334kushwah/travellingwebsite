from django.urls import path
from .views import PackageDetailView, PackageListView

urlpatterns = [
    path("", PackageListView.as_view()),

     path(
        "<int:pk>/",
        PackageDetailView.as_view(),
        name="package-detail"
    ),
]