from django.contrib.admin import AdminSite
from django.contrib.admin.forms import AuthenticationForm


class CustomerAdminSite(AdminSite):
    site_header = "Custom Admin Dashboard"
    login_form = AuthenticationForm

    def has_permission(self, request):
        # return request.user.is_authenticated #and not (request.user.is_superuser or request.user.is_admin)
        return request.user.is_active


customer_admin_site = CustomerAdminSite(name='customer_admin')
