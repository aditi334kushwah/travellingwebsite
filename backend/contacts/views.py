
from .models import Contact
from rest_framework import generics
from .serializers import ContactSerializer

# # Create your views here.

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer



