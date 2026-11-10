from django.contrib import admin
from .models import Booking
# Register your models here.

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('id', 'package','name', 'email', 'phone', 'country','status','created_at')
    list_filter = ('name','country')
    search_fields = ('name', 'country')
    ordering = ('name',)