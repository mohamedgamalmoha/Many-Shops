from django.contrib.auth.backends import get_user_model

from rest_framework import serializers

from restaurant.api.mixins import DefaultImageSerializerMixin
from ..models import MainInfo, Service, AboutUs, Theme, ContactUs
from ..constant import (DEFAULT_INFO_IMAGE_URL, DEFAULT_SERVICE_IMAGE_URL, DEFAULT_THEME_IMAGE_URL,
                        DEFAULT_MISSING_INFO_IMAGE_URL)


User = get_user_model()


class MainInfoSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_INFO_IMAGE_URL

    class Meta:
        model = MainInfo
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ServiceSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_SERVICE_IMAGE_URL

    class Meta:
        model = Service
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class AboutUsSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_MISSING_INFO_IMAGE_URL

    class Meta:
        model = AboutUs
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ThemeSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_THEME_IMAGE_URL

    class Meta:
        model = Theme
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactUs
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
