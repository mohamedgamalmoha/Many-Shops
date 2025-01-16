from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class RestaurantConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'shop'
    verbose_name = _('Shops')

    # def ready(self):
    #     from .signals import connect_signals

    #     connect_signals()
