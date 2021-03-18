from django.urls import path
# views
from .views.views import *
urlpatterns = [
    path('', index, name='index'),
    path('login', login, name='login'),
    path('login/efetuar_login', efetuar_login, name='efetuar_login'),
    path('cadastro', cadastro, name='cadastro'),
    path('cadastro/efetuar_cadastro', efetuar_cadastro, name='efetuar_cadastro'),
    path('painel', painel, name='painel'),
    path('painel/cadastrar_treino', cadastrar_treino, name='cadastrar_treino'),
    path('painel/sair', sair, name='sair'),
    
]
