from django.db import models

from django_filters import rest_framework as filters

from ..models import Shop, Category, Product


class ShopFilterSet(filters.FilterSet):
    search = filters.CharFilter(method='custom_search', label="Search by name, description")

    def custom_search(self, queryset, name, value):
        return queryset.filter(
            models.Q(name__icontains=value) | models.Q(email__icontains=value)
        )

    class Meta:
        model = Shop
        fields = ('search', 'email', 'is_active', 'is_featured')


class CategoryFilterSet(filters.FilterSet):

    class Meta:
        model = Category
        fields = ('name', 'is_active')


class ProductFilterSet(filters.FilterSet):

    class Meta:
        model = Product
        fields = ('name', 'description', 'is_active', 'is_featured', 'create_at', 'update_at')
