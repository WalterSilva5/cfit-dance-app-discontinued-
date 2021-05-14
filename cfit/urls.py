from django.urls import path
from cfit.views.views import *
urlpatterns=[
    path('', index, name='index'),
    path('cadastro/cadastrar', cadastrar, name="cadastrar"),
    path('login/efetuar_login', efetuar_login, name="efetuar_login"),
    path('login', login, name="login"),
    path('login/logout', logout, name="logout"),
    path('home', home, name="home"),
]