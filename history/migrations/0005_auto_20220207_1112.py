# Generated by Django 3.2.5 on 2022-02-07 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0004_auto_20220127_1205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history_tbl',
            name='resultQuestion',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='history_tbl',
            name='resultText',
            field=models.CharField(max_length=500),
        ),
    ]
