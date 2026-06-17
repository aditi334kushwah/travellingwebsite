import django_filters
from .models import Package


class PackageFilter(django_filters.FilterSet):

    #  Price range filter
    min_price = django_filters.NumberFilter(
        field_name="price",
        lookup_expr="gte"
    )

    max_price = django_filters.NumberFilter(
        field_name="price",
        lookup_expr="lte"
    )

    #  Duration filter
    min_days = django_filters.NumberFilter(
        field_name="duration_days",
        lookup_expr="gte"
    )

    max_days = django_filters.NumberFilter(
        field_name="duration_days",
        lookup_expr="lte"
    )

    #  Location search (improved)
    location = django_filters.CharFilter(
        field_name="location",
        lookup_expr="icontains"
    )

    # Category filter (case insensitive)
    category = django_filters.CharFilter(
        field_name="category",
        lookup_expr="iexact"
    )

    #  Popular filter (bonus useful)
    is_popular = django_filters.BooleanFilter(
        field_name="is_popular"
    )

    class Meta:
        model = Package

        fields = [
            "location",
            "category",
            "is_popular",
            "min_price",
            "max_price",
            "min_days",
            "max_days",
        ]