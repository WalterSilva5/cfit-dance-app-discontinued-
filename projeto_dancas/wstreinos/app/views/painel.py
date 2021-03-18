from django.shortcuts import render
from django.http import HttpResponse
from ..tests import usuario_logado


def painel(request):
    if usuario_logado(request):
        return render(request, 'painel/painel.html')
    else:
        return render(request, 'login.html', {'mensagem': "VOCÊ DEVE FAZER LOGIN PARA ACESSAR O SISTEMA"})

def cadastrar_treino(request):
    if usuario_logado(request):
        return render(request, 'painel/cadastrar_treino.html')
    else:
        return render(request, 'login.html', {'mensagem': "VOCÊ DEVE FAZER LOGIN PARA ACESSAR O SISTEMA"})


def sair(request):
    request.session.flush()
    return render(request, 'login.html')
