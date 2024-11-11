from django.contrib.admin import AdminSite
from django.contrib.admin.forms import AuthenticationForm
from django.utils.translation import gettext_lazy as _


class CustomerAdminSite(AdminSite):
    # Text to put at the end of each page's <title>.
    site_title = _("Restaurant Management Admin")

    # Text to put in each page's <h1>.
    site_header = _("Restaurant Management Dashboard")

    # Text to put at the top of the admin index page.
    index_title = _("Restaurant Management System")

    login_form = AuthenticationForm

    def has_permission(self, request):
        # return request.user.is_authenticated #and not (request.user.is_superuser or request.user.is_admin)
        return request.user.is_active


customer_admin_site = CustomerAdminSite(name='customer_admin')
