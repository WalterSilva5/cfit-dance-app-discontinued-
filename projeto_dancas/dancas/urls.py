from django.urls import path


# views
from .views.view import *


urlpatterns = [
    path('', index, name='index'),
]
