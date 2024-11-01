from rest_framework.settings import api_settings
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_flex_fields.utils import is_expanded
from rest_flex_fields.views import FlexFieldsMixin
from rest_flex_fields.filter_backends import FlexFieldsFilterBackend

from ..models import Restaurant, Category
from .filters import RestaurantFilterSet, CategoryFilterSet
from .serializer import RestaurantSerializers, CategorySerializer


class RestaurantViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    queryset = Restaurant.objects.filter(is_active=True)
    serializer_class = RestaurantSerializers
    permission_classes = [AllowAny]
    filter_backends = [FlexFieldsFilterBackend] + api_settings.DEFAULT_FILTER_BACKENDS
    permit_list_expands = ['owner', 'header_images', 'social_media_links']
    filterset_class = RestaurantFilterSet

    def get_queryset(self):
        queryset = super().get_queryset()
        if is_expanded(self.request, 'owner'):
            queryset = queryset.select_related('owner')
        if is_expanded(self.request, 'header_images'):
            queryset = queryset.select_related('header_images')
        if is_expanded(self.request, 'social_media_links'):
            queryset = queryset.select_related('social_media_links')
        return queryset


class CategoryViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    filter_backends = [FlexFieldsFilterBackend] + api_settings.DEFAULT_FILTER_BACKENDS
    permit_list_expands = ['variants']
    filterset_class = CategoryFilterSet

    def get_queryset(self):
        queryset = super().get_queryset()
        if is_expanded(self.request, 'products'):
            queryset = queryset.select_related('products')
        return queryset
