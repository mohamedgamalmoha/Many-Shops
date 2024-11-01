from django.core.exceptions import PermissionDenied


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
