# Generated by Django 5.1.3 on 2024-11-28 16:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rationapp', '0003_alter_ingredients_code'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ingredients',
            old_name='code',
            new_name='general',
        ),
    ]
