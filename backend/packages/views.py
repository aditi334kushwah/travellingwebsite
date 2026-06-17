from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.db.models import Count

from .models import Package
from .serializers import PackageSerializer
from .filters import PackageFilter
from .paginations import PackagePagination


@api_view(['GET'])
def category_counts(request):
    counts = (
        Package.objects
        .values('category')
        .annotate(count=Count('id'))
        .order_by('category')
    )
    return Response({item['category']: item['count'] for item in counts})


@api_view(['GET'])
def duration_counts(request):
    ranges = {
        "1-3 Days":  Package.objects.filter(duration_days__gte=1,  duration_days__lte=3).count(),
        "4-7 Days":  Package.objects.filter(duration_days__gte=4,  duration_days__lte=7).count(),
        "8-14 Days": Package.objects.filter(duration_days__gte=8,  duration_days__lte=14).count(),
        "15+ Days":  Package.objects.filter(duration_days__gte=15).count(),
    }
    return Response(ranges)


@api_view(['GET'])
def budget_counts(request):
    ranges = {
        "₹100-300":  Package.objects.filter(price__gte=100,  price__lte=300).count(),
        "₹300-500":  Package.objects.filter(price__gte=300,  price__lte=500).count(),
        "₹500+":     Package.objects.filter(price__gte=500).count(),
    }
    return Response(ranges)


class PackageListView(ListAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer


    pagination_class = PackagePagination

 
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    filterset_class = PackageFilter
 
    search_fields = [
        "title",
        "description",
        "location",
        "category",
    ]


    ordering_fields = [
        "price",
        "duration_days",
        "duration_nights",
        "created_at",
    ]

   
    ordering = ["-created_at"]


class PackageDetailView(RetrieveAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer