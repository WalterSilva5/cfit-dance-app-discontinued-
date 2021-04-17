from django.shortcuts import render
from django.http import HttpResponse
from app.models import Usuario
from app.tests import usuario_logado


def login(request):
    if usuario_logado(request):
        return render(request, 'usuario/usuario.html')
    else:
        return render(request, 'usuario/login.html')


def efetuar_login(request):
    login = request.POST['login']
    senha = request.POST['senha']
    usuario = usuario_cadastrado(login)
    if usuario:
        request.session["professor"] = usuario.values()[0]["professor"]
        request.session["login"] = login
        return render(request, 'index.html', {'mensagem': login})
    else:
        return render(request, 'usuario/login.html', {'mensagem': 'erro'})

def usuario_cadastrado(user):
    usuario = Usuario.objects.filter(login=user)
    return usuario
    
def sair(request):
    request.session.flush()
    return (request, 'index.html')