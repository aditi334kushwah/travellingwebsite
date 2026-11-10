from rest_framework import serializers
from .models import Package, PackageItinerary

class PackageItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageItinerary
        fields = ['id', 'day_number', 'title', 'description', 'activities', 'meals_included']

class PackageSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()
    itineraries = PackageItinerarySerializer(many=True, read_only=True)

    class Meta:
        model = Package
        fields = '__all__'

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return f"https://travellingwebsite-2.onrender.com{obj.image.url}"
        return None

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("Price cannot be negative.")
        return value