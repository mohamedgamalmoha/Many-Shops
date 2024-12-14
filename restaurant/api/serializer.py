from django.contrib.auth.backends import get_user_model

from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from .mixins import DefaultImageSerializerMixin
from ..constants import DEFAULT_RESTAURANT_IMAGE_URL, DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL
from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant, ProductType, WorkTime


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('password', 'is_superuser', 'is_staff', 'groups', 'user_permissions')


class HeaderImageSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_HEADER_IMAGE_URL

    class Meta:
        model = HeaderImage
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class SocialMediaLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class WorkTimeSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkTime
        exclude = ('restaurant', )


class RestaurantSerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    owner = UserSerializer(many=False)
    header_images = HeaderImageSerializer(many=True)
    social_media_links = SocialMediaLinkSerializer(many=True)
    work_times = WorkTimeSerializer(many=True)
    default_image_url = DEFAULT_RESTAURANT_IMAGE_URL

    class Meta:
        model = Restaurant
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'owner': (UserSerializer, {'many': False, "omit": ["restaurants"]}),
            'header_images': (HeaderImageSerializer, {'many': True, "omit": ["restaurant"]}),
            'social_media_links': (SocialMediaLinkSerializer, {'many': True, "omit": ["restaurant"]}),
            'work_times': (WorkTimeSerializer, {'many': True, "omit": ["restaurant"]}),
        }


class ProductVariantSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductVariant
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class ProductTypeSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    image_field_name = 'icon'
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL

    class Meta:
        model = ProductType
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class ProductSerializer(HeaderImageSerializer, FlexFieldsModelSerializer):
    types = ProductTypeSerializer(many=True)
    variants = ProductVariantSerializer(many=True)
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'types': (ProductTypeSerializer, {'many': True, "omit": ["restaurant"]}),
            'variants': (ProductVariantSerializer, {'many': True, "omit": ["restaurant"]}),
        }


class CategorySerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    products = ProductSerializer(many=True)
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'products': (ProductSerializer, {'many': True, "omit": ["category"]}),
        }
