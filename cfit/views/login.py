from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from django.shortcuts import redirect
from django.contrib.sessions.models import Session

# Create your views here.


def login(request):
    #msg = request.GET["msg"]
    return render(request, "login.html")

def validar_usuario(usuario):
    if len(usuario) < 4:
        return HttpResponse("usuario_menor_que_4")


def validar_usuario_login(usuario):
    usuario_invalido = validar_usuario(usuario)
    if usuario_invalido:
        return usuario_invalido
    if not Usuario.objects.filter(usuario=usuario):
        return HttpResponse("nao_cadastrado")


@csrf_exempt
def efetuar_login(request):
    usuario = request.POST["login_usuario"].upper()
    usuario_invalido = validar_usuario_login(usuario)
    if (usuario_invalido):
        return HttpResponse(usuario_invalido)
    senha = request.POST["login_senha"]

    usr = list(Usuario.objects.filter(
        usuario=usuario, senha=senha).values())[0]
    if not usr:
        return HttpResponse("senha_invalida")
    else:
        try:
            ses = Session.objects.all()
            for k in ses:
                #print(k.get_decoded())
                if (k.get_decoded()["usuario"] == usuario):
                    x=Session.objects.filter(usuario=usuario)
                    x.delete()
        except:
            pass
        request.session["nivel_de_acesso"]=usr["nivel_de_acesso"]
        request.session["usuario"]=usuario
        return HttpResponse("ok")

def erro(request):
    return render(request, "erro.html")


def logout(request):
    del request.session["nivel_de_acesso"]
    del request.session["usuario"]
    request.session.flush()
    return redirect("/")
