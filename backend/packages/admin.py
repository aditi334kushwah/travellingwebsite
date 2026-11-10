from django.contrib import admin
from .models import Package, PackageItinerary


class PackageItineraryInline(admin.StackedInline):
    model = PackageItinerary
    extra = 1


@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('package_code', 'title', 'price', 'location', 'duration_days', 'duration_nights')
    list_filter = ('location', 'is_popular', 'category')
    search_fields = ('package_code', 'title', 'location')
    ordering = ('title',)
    inlines = [PackageItineraryInline]


@admin.register(PackageItinerary)
class PackageItineraryAdmin(admin.ModelAdmin):
    list_display = ('package', 'day_number', 'title')
    list_filter = ('package',)
    ordering = ('package', 'day_number')