

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
