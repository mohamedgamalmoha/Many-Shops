from django.urls import path, include

from rest_framework import routers

from .views import RestaurantViewSet, CategoryViewSet


app_name = 'restaurant'

router = routers.DefaultRouter()
router.register(r'restaurant', RestaurantViewSet, basename='restaurant')
router.register(r'category', CategoryViewSet, basename='category')

urlpatterns = [
    path('', include(router.urls), name='restaurant_routes'),
]
