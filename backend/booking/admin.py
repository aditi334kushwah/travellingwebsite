from django.contrib import admin
from .models import Booking
# Register your models here.

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'country')
    list_filter = ('name','country')
    search_fields = ('name', 'country')
    ordering = ('name',)