from django.shortcuts import render
from django.http import HttpResponse
from ..models import Usuario
from ..tests import usuario_logado


def login(request):
    if usuario_logado(request):
        return render(request, 'painel/painel.html')
    else:
        return render(request, 'login.html')


def efetuar_login(request):
    login = request.POST['login']
    senha = request.POST['senha']
    if usuario_cadastrado(login):
        request.session["login"]=login
        request.session["senha"]=senha
        request.session.set_expiry(0)
        return render(request, 'painel/painel.html', {'mensagem': login})
    else:
        return render(request, 'login.html', {'mensagem': 'erro'})

def usuario_cadastrado(user):
    usuario = Usuario.objects.filter(login=user)
    print(usuario)
    return usuario
