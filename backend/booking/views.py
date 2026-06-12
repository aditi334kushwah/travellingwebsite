

from rest_framework import generics
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated
from  accounts.authentication import JWTauthentiction

class BookingCreateView(generics.CreateAPIView):

    authentication_classes = [JWTauthentiction]
    permission_classes = [IsAuthenticated]

    queryset = Booking.objects.all()

    serializer_class = BookingSerializer
