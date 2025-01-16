from django.urls import path, include

from rest_framework import routers

from .views import ShopViewSet, CategoryViewSet, ProductViewSet


app_name = 'shop'

router = routers.DefaultRouter()
router.register(r'shops', ShopViewSet, basename='shop')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls), name='shop_routes'),
]
