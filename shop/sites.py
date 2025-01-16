from django.contrib import admin
from django.contrib.admin import AdminSite
from django.contrib.admin.forms import AuthenticationForm
from django.utils.translation import gettext_lazy as _


APP_MODELS_ORDER = {
    'restaurant': ['Shop', 'Category', 'Product', 'ProuctImage'],
    'info': ['MainInfo', 'AboutUs', 'Theme', 'Service', 'ContactUs']
}


def get_app_list(self, request, app_label=None):
    """
    Override get_app_list to sort models based on model_order and handle missing apps/models.
    """
    app_dict = self._build_app_dict(request)

    # Sort the apps alphabetically
    app_list = sorted(app_dict.values(), key=lambda x: x["name"].lower())

    for app in app_list:
        app_label = app['app_label']

        # Check if the app is in the APP_MODELS_ORDER
        if app_label in APP_MODELS_ORDER:
            defined_order = APP_MODELS_ORDER[app_label]
            # Sort models based on the defined order, adding undefined models at the end
            app['models'].sort(
                key=lambda x: (
                    defined_order.index(x['object_name'])
                    if x['object_name'] in defined_order
                    else len(defined_order)  # Undefined models go to the end
                )
            )
        else:
            # For apps not in model_order, keep the default order
            app['models'].sort(key=lambda x: x['object_name'])  # Alphabetical order

    return app_list


admin.AdminSite.get_app_list = get_app_list


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
