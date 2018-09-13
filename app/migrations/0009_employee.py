# Generated by Django 2.0.7 on 2018-09-13 17:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20180909_2252'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_id', models.CharField(blank=True, max_length=20, null=True)),
                ('salary', models.IntegerField(blank=True, null=True)),
                ('date_joined', models.DateTimeField(blank=True, null=True)),
                ('work_phone', models.IntegerField(blank=True, null=True)),
                ('work_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.Department')),
                ('designation', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.Designation')),
                ('documents', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.Document')),
                ('employment_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.JobType')),
                ('profile', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.Profile')),
            ],
        ),
    ]
