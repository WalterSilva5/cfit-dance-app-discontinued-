from django.urls import path
from cfit.views.views import *

urlpatterns=[
    path('', index, name='index'),
]