
from .models import Contact
from rest_framework import generics
from .serializers import ContactSerializer
from  accounts.authentication import JWTauthentiction
from  rest_framework.permissions import IsAuthenticated

# # Create your views here.

class ContactCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentiction]
    permission_classes = [IsAuthenticated]
    
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer



