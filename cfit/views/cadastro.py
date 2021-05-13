from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
# Create your views here.

@csrf_exempt
def cadastrar(request):
    usuario = request.POST["usuario_cadastro"]
    senha = request.POST["senha_cadastro"]
    usuario = Usuario(usuario=usuario, senha=senha)
    usuario.save()
    return HttpResponse("CADASTRADO")


@csrf_exempt
def verifica_usuario_cadastrado(request):
    email = request.POST["email"].upper()
    if usuario_test.verificar_usuario(email, "")=="senha":
        return HttpResponse("CADASTRADO")
    else:
        return HttpResponse("NAO_CADASTRADO")