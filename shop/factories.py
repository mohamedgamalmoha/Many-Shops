from django.utils.text import slugify

import factory

from .enums import SocialMediaPlatform
from .models import Shop, HeaderImage, SocialMediaLink, Category, Product


class ShopFactory(factory.django.DjangoModelFactory):
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
        model = Shop


class HeaderImageFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(ShopFactory)
    image = factory.django.ImageField(width=1920, height=1080)
    is_active = factory.Faker('boolean')

    class Meta:
        model = HeaderImage


class SocialMediaLinkFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(ShopFactory)
    platform = factory.Faker('random_element', elements=[choice[0] for choice in SocialMediaPlatform.choices])
    url = factory.Faker('url')
    is_active = factory.Faker('boolean')

    class Meta:
        model = SocialMediaLink


class CategoryFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(ShopFactory)
    name = factory.Faker('word')
    image = factory.django.ImageField(width=300, height=300)
    is_active = factory.Faker('boolean')
    order = factory.Sequence(lambda n: n)

    class Meta:
        model = Category


class ProductFactory(factory.django.DjangoModelFactory):
    category = factory.SubFactory(CategoryFactory)
    name = factory.Faker('word')
    description = factory.Faker('text', max_nb_chars=200)
    price = factory.Faker('pydecimal', left_digits=3, right_digits=2, positive=True)
    price = factory.Faker('pydecimal', left_digits=3, right_digits=2, positive=True)

    image = factory.django.ImageField(width=600, height=600)
    is_active = factory.Faker('boolean')
    order = factory.Sequence(lambda n: n)

    class Meta:
        model = Product
