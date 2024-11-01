from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, ProductVariant
from .base import PermissionsAllowAllAdminMixin, PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin


class BaseInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class HeaderImageInlineCustomerAdmin(PermissionsAllowAllAdminMixin, ImageDisplayAminMixin, admin.StackedInline):
    model = HeaderImage
    readonly_image_fields = ['view_image']


class SocialMediaLInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    model = SocialMediaLink


class ProductVariantInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    model = ProductVariant


class BaseRestaurantOwnerFilterCustomerAdmin(PermissionsAllowOwnerAdminMixin, admin.ModelAdmin):

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "restaurant":
            kwargs["queryset"] = Restaurant.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(restaurant__owner=request.user)


class HeaderImageCustomerAdmin(ImageDisplayAminMixin, BaseRestaurantOwnerFilterCustomerAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'alt',  'url', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaLinkCustomerAdmin(BaseRestaurantOwnerFilterCustomerAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class RestaurantCustomerAdmin(PermissionsAllowOwnerAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'description', 'email', 'contact_number')}),
        (_('Address'), {'fields': ('city', 'state', 'zip_code')}),
        (_('More Info'), {'fields': ('opening_time', 'closing_time', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [HeaderImageInlineCustomerAdmin, SocialMediaLInlineCustomerAdmin]

    def has_add_permission(self, request):
        if self.get_queryset(request).count() >= 1:
            return False
        return True

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(owner__id=request.user.id)

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class ProductCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductVariantInlineCustomerAdmin]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "category":
            kwargs["queryset"] = Category.objects.filter(restaurant__owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(category__restaurant__owner=request.user)


class CategoryCustomerAdmin(BaseRestaurantOwnerFilterCustomerAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
