from decimal import Decimal
from datetime import timedelta

from django.utils import timezone
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from accounts.api.serializer import UserSerializer
from .mixins import DefaultImageSerializerMixin
from ..models import Shop, HeaderImage, SocialMediaLink, Category, Product, ProductImage
from ..constants import DEFAULT_SHOP_IMAGE_URL, DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL, NEW_PRODUCT_DAYS


class HeaderImageSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_HEADER_IMAGE_URL

    class Meta:
        model = HeaderImage
        exclude = ('shop', )
        read_only_fields = ('create_at', 'update_at')


class SocialMediaLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ('shop', )
        read_only_fields = ('create_at', 'update_at')


class ShopSerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    default_image_url = DEFAULT_SHOP_IMAGE_URL

    class Meta:
        model = Shop
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'owner': (UserSerializer, {'many': False}),
            'header_images': (HeaderImageSerializer, {'many': True}),
            'social_media_links': (SocialMediaLinkSerializer, {'many': True}),
        }


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ProductSerializer(HeaderImageSerializer, FlexFieldsModelSerializer):
    image_field_name = 'tag'
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL
    is_new = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'shop': (ShopSerializer, {'many': False, 'source': 'category.shop'}),
            'category': ('shop.api.serializer.CategorySerializer', {'many': False, "omit": ['products']}),
            'product_images': (ProductImageSerializer, {'many': True}),
        }

    def get_is_new(self, obj) -> bool:
        days_ago = timezone.now() - timedelta(days=NEW_PRODUCT_DAYS)
        return obj.create_at > days_ago

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if data['price']:
            data['price'] = int(float(data['price']))
        if data['after_sale_price']:
            data['after_sale_price'] = int(float(data['after_sale_price']))
        return data


class CategorySerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'shop': (ShopSerializer, {'many': False}),
            'products': (ProductSerializer, {'many': True, "omit": ["category"]}),
        }
