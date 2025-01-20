# Generated by Django 5.1.4 on 2025-01-20 13:25

import shop.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_product_letter_sizes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='number_sizes',
            field=shop.fields.CustomArrayField(base_field=models.CharField(blank=True, choices=[('35', '35'), ('36', '36'), ('37', '37'), ('38', '38'), ('39', '39'), ('40', '40'), ('41', '41'), ('42', '42'), ('43', '43'), ('44', '44'), ('45', '45'), ('46', '46'), ('47', '47'), ('48', '48')], max_length=5, null=True, verbose_name='Number Size Option'), blank=True, null=True, size=None, verbose_name='Number Size'),
        ),
    ]
