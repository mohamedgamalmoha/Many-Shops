from django.db import models

from django_filters import rest_framework as filters

from ..models import Restaurant, Category, Product


class RestaurantFilterSet(filters.FilterSet):
    search = filters.CharFilter(method='custom_search', label="Search by name, address, city, state, zip_code, description, and email")

    def custom_search(self, queryset, name, value):
        return queryset.filter(
            models.Q(name__icontains=value) | models.Q(email__icontains=value)
        )

    class Meta:
        model = Restaurant
        fields = ('search', 'email', 'is_active')


class CategoryFilterSet(filters.FilterSet):

    class Meta:
        model = Category
        fields = ('name', 'is_active')


class ProductFilterSet(filters.FilterSet):

    class Meta:
        model = Product
        fields = ('name', 'description', 'is_active')
