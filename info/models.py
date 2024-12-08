from django.db import models
from django.utils.translation import gettext_lazy as _


class MainInfo(models.Model):
    title = models.CharField(max_length=500, verbose_name=_("Title"))
    description = models.TextField(verbose_name=_("Description"))
    image = models.ImageField(upload_to='home/', verbose_name=_("Image"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _('Website Main Info')
        verbose_name_plural = _('Website Main Info')
        ordering = ('-create_at', '-update_at')

    def __str__(self):
        return str(self.title)


class Service(models.Model):
    title = models.CharField(max_length=500, verbose_name=_("Title"))
    description = models.TextField(verbose_name=_("Description"))
    image = models.ImageField(upload_to='home/', verbose_name=_("Image"))
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _('Service')
        verbose_name_plural = _('Services')
        ordering = ('-create_at', '-update_at')

    def __str__(self):
        return str(self.title)


class ContactUs(models.Model):
    full_name = models.CharField(max_length=120, null=True, verbose_name=_("Full Name"))
    email = models.EmailField(verbose_name=_("Email"))
    phone_number = models.CharField(max_length=11, null=True, verbose_name=_("Phone Number"))
    subject = models.CharField(max_length=250, verbose_name=_("Subject"))
    message = models.TextField(verbose_name=_("Message"))
    create_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Create At"))
    update_at = models.DateTimeField(auto_now=True, verbose_name=_("Update At"))

    class Meta:
        verbose_name = _('Contact Us')
        verbose_name_plural = _('Contact Us')
        ordering = ('-create_at', '-update_at')

    def __str__(self):
        return str(self.full_name)
