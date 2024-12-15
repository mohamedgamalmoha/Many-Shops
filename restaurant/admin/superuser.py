from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from .base import ImageDisplayAminMixin
from ..widgets import ImageRadioSelect
from ..constants import DEFAULT_THEME_IMAGE_URL
from ..models import HeaderImage, SocialMediaLink, WorkTime, Category, Product


class BaseInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLinkInlineAdmin(BaseInlineAdmin):
    model = SocialMediaLink


class WorkTimeInlineAdmin(BaseInlineAdmin):
    model = WorkTime
    max_num = 7
    readonly_fields = ()


class HeaderImageInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = HeaderImage
    readonly_fields = ['create_at', 'update_at', 'view_image']


class ProductInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    readonly_fields = ['create_at', 'update_at', 'view_image']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
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


class CategoryInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = Category
    readonly_fields = ['create_at', 'update_at', 'view_image']


class RestaurantSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'owner', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('owner', ('name', 'slug'), 'email', 'contact_number', 'image', 'view_image',
                                     'is_active')}),
        (_('Theme'), {'fields': ('theme', 'primary_color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [WorkTimeInlineAdmin, CategoryInlineAdmin, HeaderImageInlineAdmin, SocialMediaLinkInlineAdmin]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'primary_color' in form.base_fields:
            form.base_fields['primary_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        if 'theme' in form.base_fields:
            form.base_fields['theme'].widget = ImageRadioSelect(default_image_url=DEFAULT_THEME_IMAGE_URL)
        return form


class CategorySuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductInlineAdmin]


class ProductVariantSuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductTypeSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'icon', 'view_image')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    image_field_name = 'icon'
