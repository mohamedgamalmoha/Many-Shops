# Generated by Django 4.2.16 on 2024-11-01 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_alter_restaurant_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='headerimage',
            name='alt',
            field=models.CharField(blank=True, help_text='Text is meant to convey the “why” of the image as it relates to the content of a document or webpage', max_length=250, null=True, verbose_name='Alternative (Alt)'),
        ),
        migrations.AlterField(
            model_name='headerimage',
            name='image',
            field=models.ImageField(null=True, upload_to='headers/', verbose_name='Image'),
        ),
    ]
