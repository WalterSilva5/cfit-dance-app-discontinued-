from django.urls import path
# views
from .views.views import *
urlpatterns = [
    path('', index, name='index'),
    path('usuario', usuario, name='usuario'),
    path('usuario/login', login, name='login'),
    path('cadastro', cadastro, name='cadastro'),
    path('cadastro/efetuar_cadastro', efetuar_cadastro, name='efetuar_cadastro'),
    path('usuario/login/efetuar_login',
         efetuar_login, name='efetuar_login'),
    path('usuario/sair', sair, name='sair'),
]
