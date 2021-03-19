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
    if usuario_cadastrado(login):
        request.session["login"]=login
        request.session["senha"]=senha
        request.session.set_expiry(0)
        return render(request, 'usuario/usuario.html', {'mensagem': login})
    else:
        return render(request, 'usuario/login.html', {'mensagem': 'erro'})

def usuario_cadastrado(user):
    usuario = Usuario.objects.filter(login=user)
    print(usuario)
    return usuario
    
def sair(request):
    request.session.flush()
    return (request, 'index.html')