
from rest_framework.views import APIView 
from rest_framework.response import Response
from booking.models import Booking 
from contacts.models import Contact 
from accounts.models import User
from packages.models import Package
from rest_framework.permissions import  IsAdminUser
from accounts.authentication import JWTauthentication


class DashboardStatsView(APIView):
        
        authentication_classes = [JWTauthentication]
        permission_classes = [IsAdminUser]
        def get(self ,request ):
                
            data = {
                    "users" : User.objects.all().count(),
                    "packages" : Package.objects.all().count(),
                    "bookings" : Booking.objects.all().count(),
                    "contacts" : Contact.objects.all().count(),
            }

            return Response(data)


class  RecentActivityView(APIView) :

    
    authentication_classes = [JWTauthentication]
    permission_classes = [IsAdminUser]
    def get(self, request):


        bookings = Booking.objects.all().order_by('-created_at')[:5]
        contacts = Contact.objects.all().order_by('-created_at')[:5]
        users  = User.objects.all().order_by('-created_at')[:5]

        data = []

        for booking in bookings :
            data.append({
                'type' : 'booking',
                'message' : f"{booking.name} bookend a trip to {booking.country}",
                'created_at' : booking.created_at,
            })


        for contact in contacts :
            data.append({
                'type' : 'contact',
                'message' : f"New contact message from {contact.name}",
                'created_at' : contact.created_at,
            })


        for user in users :
            data.append({
                'type' : 'user',
                'message' : f"New user {user.username} registered",
                'created_at' : user.created_at,
            })


        data.sort(key=lambda x: x['created_at'], reverse=True)

        return Response(data[:10])


# class BookingViewSet(viewsets.ModelViewSet):
#     queryset = Booking.objects.all().order_by('-created_at')
#     serializer_class = BookingSerializer
#     authentication_classes = [JWTauthentication]
#     permission_classes = [AllowAny] 

                