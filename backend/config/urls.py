
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/packages/', include('packages.urls')),
    path('api/bookings/', include('booking.urls')),
    path('api/contact/', include('contacts.urls')),
    path('api/accounts/', include('accounts.urls')),
]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
