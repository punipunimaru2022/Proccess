# Generated by Django 3.2.5 on 2022-01-26 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='history_tbl',
            name='create_user',
            field=models.CharField(default='japan', max_length=150),
            preserve_default=False,
        ),
    ]