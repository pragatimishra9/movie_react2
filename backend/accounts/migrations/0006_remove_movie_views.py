# Generated by Django 4.1.3 on 2023-02-03 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0005_tag"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="movie",
            name="views",
        ),
    ]
