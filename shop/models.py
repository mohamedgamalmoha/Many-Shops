from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator

from django_resized import ResizedImageField
from phonenumber_field.modelfields import PhoneNumberField

from info.models import Theme
from .fields import CustomArrayField
from .constants import FORCED_IMAGE_FORMAT, MAX_FILE_SIZE
from .enums import SocialMediaPlatform, LetterSize, NumberSize, Color
from .validators import FileSizeValidator, validate_hex_color, validate_english_alphanum


User = get_user_model()


class Shop(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name="shop", verbose_name=_("Owner"))

    name = models.CharField(max_length=255, verbose_name=_("Shop Name"))
    slug = models.SlugField(max_length=255, unique=True, validators=[validate_english_alphanum],
                            verbose_name=_("Slug"),
                            help_text=_("Unique identifier for the shop used in the URL. "
                                        "It must contain only English letters, numerics, dashes (-), and underscores (_)"))

    email = models.EmailField(blank=True, null=True, verbose_name=_("Email"))
    contact_number = PhoneNumberField(blank=True, null=True, verbose_name=_("Contact Number"))
    image = ResizedImageField(null=True, size=[300, 300], quality=100, force_format=FORCED_IMAGE_FORMAT,
                              validators=[FileSizeValidator(max_upload_file_size=MAX_FILE_SIZE)],
                              upload_to='shops/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    order = models.PositiveIntegerField(default=0, blank=True, verbose_name=_('Order By'))

    theme = models.ForeignKey(Theme, on_delete=models.SET_NULL, null=True, related_name='shops',
                              verbose_name=_("Theme"))
    primary_color = models.CharField(max_length=7, null=True, validators=[validate_hex_color],
                                     verbose_name=_('Primary Color'),
                                     help_text=_("Primary color for template (e.g., #RRGGBB or #RGB)."))

    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Shop")
        verbose_name_plural = _("Shops")
        ordering = ('order', '-create_at', '-update_at')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.slug)
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)

    def is_owner(self, user) -> bool:
        return self.owner == user


class HeaderImage(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name="header_images",
                                   verbose_name=_("Header Image"))
    image = ResizedImageField(null=True, size=[1920, 1080], quality=100, force_format=FORCED_IMAGE_FORMAT,
                              validators=[FileSizeValidator(max_upload_file_size=MAX_FILE_SIZE)],
                              upload_to='headers/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"),
                                    help_text=_("Setting it to false, makes the image disappear from the page"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Creation Date'))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_('Update Date'))

    class Meta:
        verbose_name = _('Home Page Image')
        verbose_name_plural = _('Home Page Images')
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.shop.is_owner(user)

    def __str__(self):
        return self.shop.name


class SocialMediaLink(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name="social_media_links",
                                   verbose_name=_("Shop"))
    platform = models.CharField(max_length=20, choices=SocialMediaPlatform.choices, verbose_name=_("Platform"))
    url = models.CharField(max_length=250, null=True, verbose_name=_("Link / Phone Number"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Social Media Link")
        verbose_name_plural = _("Social Media Links")
        ordering = ('-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.shop.is_owner(user)

    def __str__(self):
        return str(self.url)


class Category(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name="categories",
                                   verbose_name=_("Shop"))
    name = models.CharField(max_length=100, verbose_name=_("Category Name"))
    image = ResizedImageField(null=True, size=[500, 500], quality=85, force_format=FORCED_IMAGE_FORMAT,
                              validators=[FileSizeValidator(max_upload_file_size=MAX_FILE_SIZE)],
                              upload_to='categories/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    order = models.PositiveIntegerField(default=0, blank=True, verbose_name=_('Order By'))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ('order', '-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.shop.is_owner(user)

    def __str__(self):
        return str(self.name)


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products", verbose_name=_("Category"))
    
    name = models.CharField(max_length=255, verbose_name=_("Product Name"))
    description = models.TextField(blank=True, null=True, verbose_name=_("Description"))
    
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name=_("Price"))
    seal_percentage = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0.0), MaxValueValidator(100.0)],
                                          verbose_name=_("Seal Percentage"), help_text=_("Percentage value between 0 and 100."))
    
    letter_sizes = CustomArrayField(
        base_field=models.CharField(choices=LetterSize.choices, max_length=5, blank=True, null=True, verbose_name=_('Letter Size Option')),
        blank=True, null=True, verbose_name=_('Letter Size')
    )
    number_sizes = CustomArrayField(
        base_field=models.CharField(choices=NumberSize.choices, max_length=5, blank=True, null=True, verbose_name=_('Number Size Option')),
        blank=True, null=True, verbose_name=_('Number Size')
    )
    color = CustomArrayField(
        base_field=models.CharField(choices=Color.choices, max_length=10, blank=True, null=True, verbose_name=_('Color Option')),
        blank=True, null=True, verbose_name=_('Color')
    )

    ready_to_ship = models.BooleanField(default=True, verbose_name=_("Ready To Ship"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    order = models.PositiveIntegerField(default=0, blank=True, verbose_name=_('Order By'))
   
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        ordering = ('order', '-create_at', '-update_at')

    def is_owner(self, user) -> bool:
        return self.category.is_owner(user)

    def __str__(self):
        return str(self.name)


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_images", verbose_name=_("Product Image"))
    image = ResizedImageField(blank=True, null=True, size=[600, 600], quality=100, force_format=FORCED_IMAGE_FORMAT, 
                              validators=[FileSizeValidator(max_upload_file_size=MAX_FILE_SIZE)], upload_to='products/', 
                              verbose_name=_("Product Image"))
    order = models.PositiveIntegerField(default=0, blank=True, verbose_name=_('Order By'))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))
    
    class Meta:
        verbose_name = _("Product Image")
        verbose_name_plural = _("Product Images")
        ordering = ('order', '-create_at', '-update_at')
