# Generated by Django 5.1.4 on 2024-12-23 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rationapp', '0007_ration_selected_ingredients_alter_ration_count_day_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255, null=True)),
            ],
        ),
    ]