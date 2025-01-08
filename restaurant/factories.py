from django.utils.text import slugify

import factory

from .enums import DaysOfWeekChoice, SocialMediaPlatform
from .models import Restaurant, WorkTime, HeaderImage, SocialMediaLink, Category, Product, ProductVariant, ProductType


class RestaurantFactory(factory.django.DjangoModelFactory):
    owner = factory.SubFactory('account.factories.UserFactory')
    name = factory.Faker('company')
    slug = factory.LazyAttribute(lambda o: slugify(o.name))
    email = factory.Faker('email')
    contact_number = factory.Faker('phone_number')
    image = factory.django.ImageField(width=150, height=150)
    is_active = factory.Faker('boolean')
    order = factory.Sequence(lambda n: n)
    theme = factory.SubFactory('info.factories.ThemeFactory')
    primary_color = factory.Faker('hex_color')

    class Meta:
        model = Restaurant


class WorkTimeFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    day = factory.Faker('random_element', elements=[choice[0] for choice in DaysOfWeekChoice.choices])
    is_close = factory.Faker('boolean')
    opening_time = factory.Faker('time_object')
    closing_time = factory.Faker('time_object')

    class Meta:
        model = WorkTime


class HeaderImageFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    image = factory.django.ImageField(width=1920, height=1080)
    is_active = factory.Faker('boolean')

    class Meta:
        model = HeaderImage


class SocialMediaLinkFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    platform = factory.Faker('random_element', elements=[choice[0] for choice in SocialMediaPlatform.choices])
    url = factory.Faker('url')
    is_active = factory.Faker('boolean')

    class Meta:
        model = SocialMediaLink


class CategoryFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    name = factory.Faker('word')
    image = factory.django.ImageField(width=300, height=300)
    is_active = factory.Faker('boolean')
    order = factory.Sequence(lambda n: n)

    class Meta:
        model = Category


class ProductVariantFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    name = factory.Faker('word')
    price = factory.Faker('pydecimal', left_digits=3, right_digits=2, positive=True)

    class Meta:
        model = ProductVariant


class ProductTypeFactory(factory.django.DjangoModelFactory):
    name = factory.Faker('word')
    icon = factory.django.ImageField(width=50, height=50)

    class Meta:
        model = ProductType


class ProductFactory(factory.django.DjangoModelFactory):
    category = factory.SubFactory(CategoryFactory)
    name = factory.Faker('word')
    description = factory.Faker('text', max_nb_chars=200)
    price = factory.Faker('pydecimal', left_digits=3, right_digits=2, positive=True)
    types = factory.RelatedFactoryList(ProductTypeFactory, size=4)
    variants = factory.RelatedFactoryList(ProductTypeFactory, size=4)
    image = factory.django.ImageField(width=600, height=600)
    is_active = factory.Faker('boolean')
    order = factory.Sequence(lambda n: n)

    class Meta:
        model = Product
