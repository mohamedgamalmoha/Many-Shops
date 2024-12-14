from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from .base import ImageDisplayAminMixin
from ..widgets import ImageRadioSelect
from ..models import HeaderImage, SocialMediaLink, WorkTime
from ..constants import DEFAULT_THEME_IMAGE_URL


class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "email")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_superuser",
                ),
            },
        ),
        (_("Important Dates"), {"fields": ("last_login", "date_joined")}),
    )

    list_filter = ("is_staff", "is_superuser", "is_active")
    ordering = ("-date_joined",)
    filter_horizontal = ()


class BaseInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLinkInlineAdmin(BaseInlineAdmin):
    model = SocialMediaLink


class HeaderImageInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']


class WorkTimeInlineAdmin(admin.StackedInline):
    model = WorkTime
    extra = 0
    min_num = 1
    max_num = 7
    can_delete = False
    show_change_link = False


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
    inlines = [WorkTimeInlineAdmin, HeaderImageInlineAdmin, SocialMediaLinkInlineAdmin]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'primary_color' in form.base_fields:
            form.base_fields['primary_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        if 'theme' in form.base_fields:
            form.base_fields['theme'].widget = ImageRadioSelect(default_image_url=DEFAULT_THEME_IMAGE_URL)
        return form


class HeaderImageSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'alt', 'url', 'image', 'view_image',  'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaLinkSuperuserAdmin(admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class CategorySuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'category', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Offered By'), {'fields': ('types', 'variants')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductVariantSuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'restaurant', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductTypeSuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'restaurant', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'icon')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
