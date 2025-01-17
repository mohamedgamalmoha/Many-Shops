from django.core.exceptions import PermissionDenied
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from ..constants import DEFAULT_PRODUCT_IMAGE_URL


class DeactivateLogEntryMixin:

    def log_addition(self, request, obj, message):
        ...

    def log_change(self, request, obj, message):
        ...

    def log_deletion(self, request, obj, object_repr):
        ...


class PermissionsAllowAllAdminMixin:

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request, obj=None):
        return True

    def has_delete_permission(self, request, obj=None):
        return True

    def has_change_permission(self, request, obj=None):
        return True


class PermissionsAllowOwnerAdminMixin:

    def has_view_or_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)


class PermissionsReadOnlyAdminMixin:

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def get_actions(self, request):
        return None

    def save_model(self, request, obj, form, change):
        raise PermissionDenied

    def delete_model(self, request, obj):
        raise PermissionDenied

    def save_related(self, request, form, formsets, change):
        raise PermissionDenied


class ImageDisplayAminMixin:
    image_field_name = 'image'
    readonly_image_fields = ['list_image', 'view_image']

    def _show_image(self, obj, width=150, height=200):
        image = self.get_image_field(obj)
        if image and image.url:
            return mark_safe(f"<a href='{image.url}' ><img src='{image.url}' width={width} height={height}></a>")
        return mark_safe(f"<a href='#' ><img src='{DEFAULT_PRODUCT_IMAGE_URL}' width={width} height={height}></a>")

    def get_image_field(self, obj):
        return getattr(obj, self.image_field_name, None)

    def list_image(self, obj=None):
        if obj is None:
            return ''
        return self._show_image(obj, width=75, height=50)

    def view_image(self, obj=None):
        if obj is None:
            return ''
        return self._show_image(obj, width=150, height=200)

    def get_readonly_fields(self, request, obj=None):
        readonly_fields = super().get_readonly_fields(request, obj)
        if isinstance(readonly_fields, (tuple, list)):
            readonly_fields = [*readonly_fields, *self.readonly_image_fields]
        return readonly_fields

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        if isinstance(list_display, (tuple, list)) and 'list_image' not in list_display:
            list_display = [*list_display, 'list_image']
        return list_display

    list_image.short_description = _('Thumbnail')
    view_image.short_description = _('Image')


class ShopRelatedObjectAdminMixin:

    @staticmethod
    def get_user_shop(request):
        return getattr(request.user, 'shop', None)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        user_shop = self.get_user_shop(request)
        return queryset.filter(shop=user_shop)

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            user_shop = self.get_user_shop(request)
            obj.shop = user_shop
        super().save_model(request, obj, form, change)
