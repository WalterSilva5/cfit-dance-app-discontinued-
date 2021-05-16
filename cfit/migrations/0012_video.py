# Generated by Django 3.1.6 on 2021-05-16 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cfit', '0011_auto_20210516_1107'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, unique=True, verbose_name='nome')),
                ('posicao', models.IntegerField(default=0, verbose_name='posicao')),
                ('playlist_id', models.IntegerField(verbose_name='playlist_id')),
                ('link', models.CharField(default='', max_length=255, verbose_name='link')),
            ],
        ),
    ]