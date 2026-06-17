from django.urls import path
from .views import PackageDetailView, PackageListView, category_counts, duration_counts, budget_counts

urlpatterns = [
    path("", PackageListView.as_view()),
    path("categories/", category_counts),
    path("durations/", duration_counts),
    path("budgets/", budget_counts),
    path("<int:pk>/", PackageDetailView.as_view(), name="package-detail"),
]