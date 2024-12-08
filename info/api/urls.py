from django.urls import path

from .views import MainInfoAPIView, ServiceAPIView, ContactUsAPIView


app_name = 'info'

urlpatterns = [
    path('main-info/', MainInfoAPIView.as_view(), name='main-info'),
    path('services/', ServiceAPIView.as_view(), name='services'),
    path('contact-us/', ContactUsAPIView.as_view(), name='contact-us')
]
