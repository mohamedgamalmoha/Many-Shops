# Generated by Django 5.1.4 on 2025-02-03 14:45

import shop.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_shop_border_color'),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=10, validators=[shop.validators.validate_hex_color], verbose_name='Color')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active')),
                ('order', models.PositiveIntegerField(blank=True, default=0, verbose_name='Order By')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Create At')),
                ('update_at', models.DateTimeField(auto_now=True, verbose_name='Update At')),
            ],
            options={
                'verbose_name': 'Color',
                'verbose_name_plural': 'Colors',
                'ordering': ('order', '-create_at', '-update_at'),
            },
        ),
        migrations.CreateModel(
            name='LetterSize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(max_length=50, verbose_name='Letter Size')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active')),
                ('order', models.PositiveIntegerField(blank=True, default=0, verbose_name='Order By')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Create At')),
                ('update_at', models.DateTimeField(auto_now=True, verbose_name='Update At')),
            ],
            options={
                'verbose_name': 'Letter Size',
                'verbose_name_plural': 'Letter Sizes',
                'ordering': ('order', '-create_at', '-update_at'),
            },
        ),
        migrations.CreateModel(
            name='NumberSize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.PositiveIntegerField(verbose_name='Number Size')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active')),
                ('order', models.PositiveIntegerField(blank=True, default=0, verbose_name='Order By')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Create At')),
                ('update_at', models.DateTimeField(auto_now=True, verbose_name='Update At')),
            ],
            options={
                'verbose_name': 'Number Size',
                'verbose_name_plural': 'Number Sizes',
                'ordering': ('order', '-create_at', '-update_at'),
            },
        ),
        migrations.RemoveField(
            model_name='product',
            name='color',
        ),
        migrations.RemoveField(
            model_name='product',
            name='seal_percentage',
        ),
        migrations.AddField(
            model_name='product',
            name='after_sale_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True, verbose_name='Sale Price'),
        ),
        migrations.RemoveField(
            model_name='product',
            name='letter_sizes',
        ),
        migrations.RemoveField(
            model_name='product',
            name='number_sizes',
        ),
        migrations.AddField(
            model_name='product',
            name='colors',
            field=models.ManyToManyField(blank=True, to='shop.color', verbose_name='Color'),
        ),
        migrations.AddField(
            model_name='product',
            name='letter_sizes',
            field=models.ManyToManyField(blank=True, to='shop.lettersize', verbose_name='Letter Size'),
        ),
        migrations.AddField(
            model_name='product',
            name='number_sizes',
            field=models.ManyToManyField(blank=True, to='shop.numbersize', verbose_name='Number Size'),
        ),
    ]
