from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from ..constants import DEFAULT_THEME_IMAGE_URL
from ..models import HeaderImage, SocialMediaLink, Category, ProductVariant, ProductType
from .base import (PermissionsAllowAllAdminMixin, PermissionsAllowOwnerAdminMixin,
                   RestaurantRelatedObjectAdminMixin, ImageDisplayAminMixin)


class BaseInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 10
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class HeaderImageInlineCustomerAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']


class SocialMediaLInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = SocialMediaLink


class HeaderImageCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['__str__', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('alt',  'url', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaLinkCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, admin.ModelAdmin):
    list_display = ['platform', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class RestaurantCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['show_theme', 'create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'description', 'email', 'contact_number', 'image', 'view_image')}),
        (_('Address'), {'fields': ('address', 'city', 'state', 'zip_code')}),
        (_('More Info'), {'fields': ('opening_time', 'closing_time', 'is_active')}),
        (_('Theme'), {'fields': ('show_theme', 'primary_color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [HeaderImageInlineCustomerAdmin, SocialMediaLInlineCustomerAdmin]

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(owner=request.user)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'primary_color' in form.base_fields:
            form.base_fields['primary_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        return form

    def show_theme(self, obj):
        from django.templatetags.static import static
        theme = obj.theme
        if not theme:
            theme_src = static(f'images/{theme}.png')
            theme_alt = obj.get_theme_display()
        else:
            theme_src = DEFAULT_THEME_IMAGE_URL
            theme_alt = None
        return mark_safe(f"<a href='#' ><img src='{theme_src}' alt={theme_alt} width=200 height=150></a>")

    show_theme.short_description = 'Theme'

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class ProductCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Offered By'), {'fields': ('types', 'variants')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "category":
            kwargs["queryset"] = Category.objects.filter(restaurant__owner=request.user)
        if db_field.name == "types":
            kwargs["queryset"] = ProductType.objects.filter(restaurant__owner=request.user)
        if db_field.name == "variants":
            kwargs["queryset"] = ProductVariant.objects.filter(restaurant__owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(category__restaurant__owner=request.user)


class CategoryCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductVariantCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, TranslationAdmin):
    list_display = ['name', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductTypeCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, TranslationAdmin):
    list_display = ['name', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'icon')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
