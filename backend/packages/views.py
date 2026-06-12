from rest_framework import generics
from .models import Package
from .serializers import PackageSerializer


class PackageListView(generics.ListAPIView):
 
    queryset = Package.objects.all()
    serializer_class = PackageSerializer


class PackageDetailView(generics.RetrieveAPIView):
  
    queryset = Package.objects.all()
    serializer_class = PackageSerializer