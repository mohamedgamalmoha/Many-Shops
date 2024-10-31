from django.contrib.auth.backends import get_user_model
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant


User = get_user_model()


class HeaderImageSerializers(serializers.ModelSerializer):

    class Meta:
        model = HeaderImage
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class SocialMediaLinkSerializers(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class RestaurantSerializers(FlexFieldsModelSerializer):
    header_images = HeaderImageSerializers(many=True)
    social_media_links = SocialMediaLinkSerializers(many=True)

    class Meta:
        model = Restaurant
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'header_images': (HeaderImageSerializers, {'many': True, "omit": ["restaurant"]}),
            'social_media_links': (SocialMediaLinkSerializers, {'many': True, "omit": ["restaurant"]})
        }


class ProductVariantSerializers(serializers.ModelSerializer):

    class Meta:
        model = ProductVariant
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ProductSerializers(FlexFieldsModelSerializer):
    variants = ProductVariantSerializers(many=True)

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'variants': (ProductVariantSerializers, {'many': True, "omit": ["product"]}),
        }


class CategorySerializer(FlexFieldsModelSerializer):
    products = ProductSerializers(many=True)

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'products': (ProductSerializers, {'many': True, "omit": ["category"]}),
        }
