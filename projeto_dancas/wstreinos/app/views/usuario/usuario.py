from django.shortcuts import render
from django.http import HttpResponse
from app.tests import usuario_logado


def usuario(request):
    if usuario_logado(request):
        return render(request, 'usuario/usuario.html')
    else:
        return render(request, 'usuario/login.html', {'mensagem': "VOCÊ DEVE FAZER LOGIN PARA ACESSAR O SISTEMA"})

def cadastrar_treino(request):
    if usuario_logado(request):
        return render(request, 'usuario/cadastrar_treino.html')
    else:
        return render(request, 'usuario/login.html', {'mensagem': "VOCÊ DEVE FAZER LOGIN PARA ACESSAR O SISTEMA"})


def sair(request):
    request.session.flush()
    return render(request, 'usuario/login.html')
