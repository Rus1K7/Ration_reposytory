# Generated by Django 5.1.3 on 2024-12-12 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rationapp', '0005_remove_general_flag_pc_pc_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='composition',
            name='name',
            field=models.CharField(default='1', max_length=60, unique=True),
        ),
    ]
