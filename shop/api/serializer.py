from decimal import Decimal

from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from accounts.api.serializer import UserSerializer
from .mixins import DefaultImageSerializerMixin
from ..models import Shop, HeaderImage, SocialMediaLink, Category, Product, ProductImage
from ..constants import DEFAULT_SHOP_IMAGE_URL, DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL


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
    price_after_seal = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'shop': (ShopSerializer, {'many': False, 'source': 'category.shop'}),
            'category': ('shop.api.serializer.CategorySerializer', {'many': False, "omit": ['products']}),
            'product_images': (ProductImageSerializer, {'many': True}),
        }

    def get_price_after_seal(self, obj) -> Decimal:
        if not (obj and obj.price and obj.seal_percentage):
            return 0.0
        discount = (obj.price * obj.seal_percentage) / 100
        return obj.price - discount

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['price'] = int(float(data['price']))
        data['seal_percentage'] = int(float(data['seal_percentage']))
        data['price_after_seal'] = int(float(data['price_after_seal']))
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
