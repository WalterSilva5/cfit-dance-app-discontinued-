from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from cfit.sessionTester import not_logged_only

def validarLogin(login):
    return login


@csrf_exempt
#@not_logged_only
def cadastrar(request):
    usuario = request.POST["cadastro_usuario"].upper()
    print(usuario)
    # if usuario == "login_invalido":
    #     return HttpResponse("LOGIN INVALIDO")

    senha = request.POST["cadastro_senha"]
    usuario = Usuario(usuario=usuario, senha=senha,
        bloqueado=0, nivel_de_acesso=0)
    usuario.save()
    return HttpResponse("CADASTRADO")
