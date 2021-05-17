from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from cfit.sessionTester import not_logged_only

def validar_usuario(usuario):
    if len(usuario) < 4:
        return HttpResponse("usuario_menor_que_4")

def validar_usuario_cadastro(usuario):
    usuario_invalido = validar_usuario(usuario)
    if usuario_invalido:
        return usuario_invalido
    try:
        usr = list(Usuario.objects.filter(usuario=usuario).values())[0]
    except:
        pass
    else:
        if usr:
            return HttpResponse("ja_cadastrado")

@csrf_exempt
#@not_logged_only
def cadastrar(request):
    usuario = request.POST["cadastro_usuario"].upper()
    usuario_invalido = validar_usuario_cadastro(usuario)
    if usuario_invalido:
        return HttpResponse(usuario_invalido)
    else:
        senha = request.POST["cadastro_senha"]
        usuario = Usuario(usuario=usuario, senha=senha,
            bloqueado=0, nivel_de_acesso=0)
        usuario.save()
        return HttpResponse("cadastro_efetuado")
