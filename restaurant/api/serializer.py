from django.contrib.auth.backends import get_user_model

from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from ..constants import DEFAULT_RESTAURANT_IMAGE_URL, DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL
from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant, ProductType


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('password', 'is_superuser', 'is_staff', 'groups', 'user_permissions')


class HeaderImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = HeaderImage
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_HEADER_IMAGE_URL)

        return representation


class SocialMediaLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class RestaurantSerializer(FlexFieldsModelSerializer):
    owner = UserSerializer(many=False)
    header_images = HeaderImageSerializer(many=True)
    social_media_links = SocialMediaLinkSerializer(many=True)

    class Meta:
        model = Restaurant
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'owner': (UserSerializer, {'many': False, "omit": ["restaurants"]}),
            'header_images': (HeaderImageSerializer, {'many': True, "omit": ["restaurant"]}),
            'social_media_links': (SocialMediaLinkSerializer, {'many': True, "omit": ["restaurant"]}),
        }

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_RESTAURANT_IMAGE_URL)

        return representation


class ProductVariantSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductVariant
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class ProductTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductType
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class ProductSerializer(FlexFieldsModelSerializer):
    types = ProductTypeSerializer(many=True)
    variants = ProductVariantSerializer(many=True)

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'types': (ProductTypeSerializer, {'many': True, "omit": ["restaurant"]}),
            'variants': (ProductVariantSerializer, {'many': True, "omit": ["restaurant"]}),
        }

    def to_representation(self, instance):
        # Use the original to_representation method to get the initial representation
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_PRODUCT_IMAGE_URL)

        return representation


class CategorySerializer(FlexFieldsModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'products': (ProductSerializer, {'many': True, "omit": ["category"]}),
        }

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            request = self.context.get('request')
            representation['image'] = request.build_absolute_uri(DEFAULT_PRODUCT_IMAGE_URL)

        return representation
