from django.contrib.auth.backends import get_user_model

from rest_framework import serializers

from ..models import MainInfo, Service, ContactUs
from ..constant import DEFAULT_INFO_IMAGE_URL, DEFAULT_SERVICE_IMAGE_URL


User = get_user_model()


class MainInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = MainInfo
        exclude = ()
        read_only_fields = ('create_at', 'update_at')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_INFO_IMAGE_URL)

        return representation


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        exclude = ()
        read_only_fields = ('create_at', 'update_at')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_SERVICE_IMAGE_URL)

        return representation


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactUs
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
