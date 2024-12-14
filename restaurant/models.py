from datetime import time

from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _

from phonenumber_field.modelfields import PhoneNumberField

from info.models import Theme
from .enums import SocialMediaPlatform, DaysOfWeekChoice
from .validators import validate_hex_color, validate_english_alphanum


User = get_user_model()


class Restaurant(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name="restaurant", verbose_name=_("Owner"))

    name = models.CharField(max_length=255, verbose_name=_("Restaurant Name"))
    slug = models.SlugField(max_length=255, unique=True, validators=[validate_english_alphanum],
                            verbose_name=_("Slug"),
                            help_text=_("Unique identifier for the restaurant used in the URL. "
                                        "It must contain only English letters, numerics, dashes (-), and underscores (_)"))

    email = models.EmailField(blank=True, null=True, verbose_name=_("Email"))
    contact_number = PhoneNumberField(blank=True, null=True, verbose_name=_("Contact Number"))
    image = models.ImageField(null=True, upload_to='restaurants/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))

    theme = models.ForeignKey(Theme, on_delete=models.SET_NULL, null=True, related_name='restaurants',
                              verbose_name=_("Theme"))
    primary_color = models.CharField(max_length=7, null=True, validators=[validate_hex_color],
                                     verbose_name=_('Primary Color'),
                                     help_text=_("Primary color for template (e.g., #RRGGBB or #RGB)."))

    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Restaurant")
        verbose_name_plural = _("Restaurants")
        ordering = ('-create_at', '-update_at')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.slug)
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)

    def is_owner(self, user) -> bool:
        return self.owner == user


class WorkTime(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='work_times',
                                   verbose_name=_("Restaurant"))
    day = models.CharField(max_length=3, choices=DaysOfWeekChoice.choices, verbose_name=_("Day"))
    is_open = models.BooleanField(default=True, verbose_name=_("Open"),
                                  help_text=_("Indicates whether the restaurant is open on this day"))
    opening_time = models.TimeField(blank=True, null=True, default=time(9, 0), verbose_name=_("Opening Time"))  # 9:00 AM default
    closing_time = models.TimeField(blank=True, null=True, default=time(18, 0), verbose_name=_("Closing Time"))  # 6:00 PM default

    class Meta:
        verbose_name = _("Work Time")
        verbose_name_plural = _("Work Times")
        unique_together = ('restaurant', 'day')


class HeaderImage(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="header_images",
                                   verbose_name=_("Header Image"))
    alt = models.CharField(max_length=250, blank=True, null=True, verbose_name=_("Alternative (Alt)"),
                           help_text=_("Text is meant to convey the “why” of the image as it relates to the content of "
                                       "a document or webpage"))
    image = models.ImageField(null=True, upload_to='headers/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"),
                                    help_text=_("Setting it to false, makes the image disappear from the page"))
    url = models.URLField(blank=True, null=True, verbose_name=_('Link'))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Creation Date'))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_('Update Date'))

    class Meta:
        verbose_name = _('Home Page Image')
        verbose_name_plural = _('Home Page Images')
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.restaurant.is_owner(user)

    def __str__(self):
        return str(self.alt)


class SocialMediaLink(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="social_media_links",
                                   verbose_name=_("Restaurant"))
    platform = models.CharField(max_length=20, choices=SocialMediaPlatform.choices, verbose_name=_("Platform"))
    url = models.URLField(verbose_name=_("Link"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Social Media Link")
        verbose_name_plural = _("Social Media Links")
        unique_together = ('restaurant', 'platform')
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.restaurant.is_owner(user)

    def __str__(self):
        return str(self.url)


class Category(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="categories",
                                   verbose_name=_("Restaurant"))
    name = models.CharField(max_length=100, verbose_name=_("Category Name"))
    image = models.ImageField(null=True, upload_to='categories/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.restaurant.is_owner(user)

    def __str__(self):
        return str(self.name)


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products", verbose_name=_("Category"))
    name = models.CharField(max_length=255, verbose_name=_("Product Name"))
    description = models.TextField(blank=True, null=True, verbose_name=_("Description"))
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name=_("Price"))
    types = models.ManyToManyField('ProductType', blank=True, related_name='types', verbose_name=_("Types"))
    variants = models.ManyToManyField('ProductVariant', blank=True, related_name='products', verbose_name=_("Variants"))
    image = models.ImageField(upload_to="products/", blank=True, null=True, verbose_name=_("Product Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.category.is_owner(user)

    def __str__(self):
        return str(self.name)


class ProductVariant(models.Model):
    name = models.CharField(max_length=100, verbose_name=_("Variant Name"))
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name=_("Variant Price"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Product Variant")
        verbose_name_plural = _("Product Variants")
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.restaurant.is_owner(user)

    def __str__(self):
        return str(self.name)


class ProductType(models.Model):
    name = models.CharField(max_length=100, verbose_name=_("Name"))
    icon = models.ImageField(upload_to="icons/", blank=True, null=True, verbose_name=_("Icon"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Product Type")
        verbose_name_plural = _("Product Types")
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.restaurant.is_owner(user)

    def __str__(self):
        return str(self.name)
