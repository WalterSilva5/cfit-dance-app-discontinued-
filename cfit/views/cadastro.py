from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario


@csrf_exempt
def cadastrar(request):
    usuario = request.POST["cadastro_usuario"]
    senha = request.POST["cadastro_senha"]
    usuario = Usuario(usuario=usuario, senha=senha)
    usuario.save()
    return HttpResponse("CADASTRADO")
