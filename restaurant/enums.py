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


class DaysOfWeekChoice(models.TextChoices):
    SATURDAY = 'SAT', _("Saturday")
    SUNDAY = 'SUN', _("Sunday")
    MONDAY = 'MON', _("Monday")
    TUESDAY = 'TUE', _("Tuesday")
    WEDNESDAY = 'WED', _("Wednesday")
    THURSDAY = 'THU', _("Thursday")
    FRIDAY = 'FRI', _("Friday")
