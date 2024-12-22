from django.db import models
from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from ..constants import DEFAULT_THEME_IMAGE_URL
from ..models import HeaderImage, SocialMediaLink, WorkTime, Category, Product, ProductVariant
from .base import (PermissionsAllowAllAdminMixin, PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin,
                   ImageDisplayAminMixin)


class BaseInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 10
    can_delete = True
    show_change_link = False
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = SocialMediaLink


class WorkTimeInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = WorkTime
    max_num = 7
    readonly_fields = ()


class HeaderImageInlineCustomerAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    model = HeaderImage
    readonly_fields = ['create_at', 'update_at', 'view_image']


class ProductInlineCustomerAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    readonly_fields = ['create_at', 'update_at', 'view_image']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Offered By'), {'fields': ('types', 'variants')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    model = Product
    extra = 1
    min_num = 0
    max_num = None
    can_delete = True
    show_change_link = False

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "variants":
            user_restaurant = getattr(request.user, 'restaurant', None)
            kwargs["queryset"] = ProductVariant.objects.filter(
                models.Q(restaurant=user_restaurant) | models.Q(restaurant=None)
            )
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


class CategoryInlineCustomerAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    model = Category
    readonly_fields = ['create_at', 'update_at', 'view_image']


class RestaurantCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['show_theme', 'create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': (('name', 'slug'), 'email', 'contact_number', 'image', 'view_image', 'is_active')}),
        (_('Theme'), {'fields': ('show_theme', 'primary_color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [WorkTimeInlineCustomerAdmin, CategoryInlineCustomerAdmin, HeaderImageInlineCustomerAdmin,
               SocialMediaLInlineCustomerAdmin]

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
        theme = obj.theme
        if theme and theme.image:
            theme_src = theme.image.url
            theme_alt = theme.title
        else:
            theme_src = DEFAULT_THEME_IMAGE_URL
            theme_alt = None
        return mark_safe(f"<a href='#' ><img src='{theme_src}' alt={theme_alt} width=200 height=150></a>")

    show_theme.short_description = 'Theme'

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class CategoryCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, ImageDisplayAminMixin,
                            TranslationAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductInlineCustomerAdmin]


class ProductVariantsCustomerAdmin(PermissionsAllowOwnerAdminMixin, RestaurantRelatedObjectAdminMixin, TranslationAdmin):
    list_display = ['name', 'price', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
