from django.contrib import admin

# Register your models here.
from .models import Package

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):

    list_display = ('title', 'price', 'location',)
    list_filter = ('location', 'is_popular')
    search_fields = ('title', 'location')
    ordering = ('title',)