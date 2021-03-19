from django.shortcuts import render
from django.http import HttpResponse

from ..models import Usuario
from ..tests import usuario_logado

def cadastro(request):
    if usuario_logado(request):
        return render(request, 'aluno/aluno.html')
    else:
        return render(request, 'cadastro.html')


def efetuar_cadastro(request):
    login = request.POST['login']
    senha = request.POST['senha']

    if usuario_cadastrado(login):
        return render(request, 'cadastro.html', {'erro': 'USUARIO JA CADASTRADO'})
    else:
        usuario = Usuario(login=login, senha=senha)
        usuario.save()
        return render(request, 'cadastro.html', {'sucesso': 'USUARIO CADASTRADO COM SUCESSO'})


def usuario_cadastrado(user):
    usuario = Usuario.objects.filter(login=user)
    return usuario
