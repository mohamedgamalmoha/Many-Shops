from django.contrib import admin
from django.contrib.auth.models import Group

from .sites import custom_admin_site
from .models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant


class DeactivateLogEntryMixin:

    def log_addition(self, request, object, message):
        ...

    def log_change(self, request, object, message):
        ...

    def log_deletion(self, request, object, object_repr):
        ...


class RestaurantCustomAdmin(DeactivateLogEntryMixin, admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['owner', 'create_at', 'update_at']

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        if self.get_queryset(request).count() >= 1:
            return False
        return True

    def has_delete_permission(self, request, obj=None):
        return obj and obj.owner == request.user

    def has_change_permission(self, request, obj=None):
        return obj and obj.owner == request.user

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(owner=request.user)

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class HeaderImageCustomAdmin(DeactivateLogEntryMixin, admin.ModelAdmin):

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj and obj.owner == request.user

    def has_change_permission(self, request, obj=None):
        return obj and obj.owner == request.user

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(restaurant__owner=request.user)


admin.site.register(Restaurant)
admin.site.register(HeaderImage)
admin.site.register(SocialMediaLink)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.unregister(Group)
custom_admin_site.register(Restaurant, RestaurantCustomAdmin)
custom_admin_site.register(HeaderImage, HeaderImageCustomAdmin)
