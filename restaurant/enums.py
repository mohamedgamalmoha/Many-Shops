from django.db import models
from django.utils.translation import gettext_lazy as _


class SocialMediaPlatform(models.TextChoices):
    FACEBOOK = 'facebook', _("Facebook")
    TWITTER = 'twitter', _("Twitter")
    INSTAGRAM = 'instagram', _("Instagram")
    LINKEDIN = 'linkedin', _("LinkedIn")
    TIKTOK = 'tiktok', _("TikTok")
    YOUTUBE = 'youtube', _("YouTube")
    PINTEREST = 'pinterest', _("Pinterest")


class ProductTypeChoice(models.TextChoices):
    HOT = '🌶️', '🌶️'
    VERY_HOT = '🔥', '🔥'


class RestaurantThemeChoice(models.TextChoices):
    THEME_1 = 'theme_1', _('Theme 1')
    THEME_2 = 'theme_2', _('Theme 2')
    THEME_3 = 'theme_3', _('Theme 3')
