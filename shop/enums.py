from django.db import models
from django.utils.translation import gettext_lazy as _


class SocialMediaPlatform(models.TextChoices):
    FACEBOOK = 'facebook', _("Facebook")
    TWITTER = 'twitter', _("Twitter")
    INSTAGRAM = 'instagram', _("Instagram")
    TIKTOK = 'tiktok', _("TikTok")
    YOUTUBE = 'youtube', _("YouTube")
    PINTEREST = 'pinterest', _("Pinterest")
    PHONE_NUMBER_1 = 'phone_number_1', _('Phone Number 1')
    PHONE_NUMBER_2 = 'phone_number_2', _('Phone Number 2')


class LetterSize(models.TextChoices):
    SMALL = 'S', _('Small')
    MEDIUM = 'M', _('Medium')
    LARGE = 'L', _('Large')
    XLARGE = 'XL', _('Extra Large')
    XXLARGE = 'XXL', _('Double Extra Large')
    XXXLARGE = '3XL', _('Triple Extra Large')
    XXXXLARGE = '4XL', _('Quadruple Extra Large')
    XXXXXLARGE = '5XL', _('Quintuple Extra Large')


class NumberSize(models.IntegerChoices):
    SIZE_35 = 35, _('35')
    SIZE_36 = 36, _('36')
    SIZE_37 = 37, _('37')
    SIZE_38 = 38, _('38')
    SIZE_39 = 39, _('39')
    SIZE_40 = 40, _('40')
    SIZE_41 = 41, _('41')
    SIZE_42 = 42, _('42')
    SIZE_43 = 43, _('43')
    SIZE_44 = 44, _('44')
    SIZE_45 = 45, _('45')
    SIZE_46 = 46, _('46')
    SIZE_47 = 47, _('47')
    SIZE_48 = 48, _('48')


class Color(models.TextChoices):
    RED = 'red', _('Red')
    YELLOW = 'rellow', _('Yellow')
    BLUE = 'blue', _('Blue')
    GREEN = 'breen', _('Green')
    BLACK = 'black', _('Black')
    WHITE = 'white', _('White')
    ORANGE = 'orange', _('Orange')
    PURPLE = 'purple', _('Purple')
    PINK = 'pink', _('Pink')
    GREY = 'grey', _('Grey')
    BROWN = 'brown', _('Brown')
    NAVY = 'navy', _('Navy')
