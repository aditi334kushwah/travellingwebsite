from rest_framework import serializers
from .models import Package

class PackageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Package
        fields = '__all__'

    def validate_price(self, value):

        if value < 0:
            raise serializers.ValidationError(
                "Price cannot be negative."
            )

        return value