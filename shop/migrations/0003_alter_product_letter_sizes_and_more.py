# Generated by Django 5.1.4 on 2025-01-17 15:05

import django.db.models.deletion
import shop.fields
import shop.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_product_ready_to_ship'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='letter_sizes',
            field=shop.fields.CustomArrayField(base_field=models.CharField(blank=True, choices=[('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL'), ('XXL', 'XXL'), ('3XL', '3XL'), ('4XL', '4XL'), ('5XL', '5XL')], max_length=5, null=True, verbose_name='Letter Size Option'), blank=True, null=True, size=None, verbose_name='Letter Size'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_images', to='shop.product', verbose_name='Product Image'),
        ),
        migrations.AlterField(
            model_name='shop',
            name='slug',
            field=models.SlugField(help_text='Unique identifier for the shop used in the URL. It must contain only English letters, numerics, dashes (-), and underscores (_)', max_length=255, unique=True, validators=[shop.validators.validate_english_alphanum], verbose_name='Slug'),
        ),
    ]
