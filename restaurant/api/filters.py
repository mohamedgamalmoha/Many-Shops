from django.db import models

from django_filters import rest_framework as filters

from ..models import Restaurant, Category


class RestaurantFilterSet(filters.FilterSet):
    search = filters.CharFilter(method='custom_search', label="Search by name, address, city, state, zip_code, description, and email")

    def custom_search(self, queryset, name, value):
        return queryset.filter(
            models.Q(name__icontains=value) | models.Q(address__icontains=value) |
            models.Q(city__icontains=value) | models.Q(state__icontains=value) |
            models.Q(zip_code__icontains=value) | models.Q(description__icontains=value) |
            models.Q(email__icontains=value)
        )

    class Meta:
        model = Restaurant
        fields = ('search', 'name', 'address', 'city', 'state', 'zip_code', 'description', 'email', 'is_active')


class CategoryFilterSet(filters.FilterSet):

    class Meta:
        model = Category
        fields = ('name', 'is_active')
