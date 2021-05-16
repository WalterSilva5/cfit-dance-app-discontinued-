from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from django.shortcuts import redirect

# Create your views here.


@csrf_exempt
def efetuar_login(request):
    usuario = request.POST["login_usuario"].upper()
    senha = request.POST["login_senha"]
    if(Usuario.objects.filter(usuario=usuario)):
        usr = Usuario.objects.filter(usuario=usuario)
        request.session["nivel_de_acesso"] = list(usr.values())[0]["nivel_de_acesso"]
        request.session["usuario"] = usuario
        return HttpResponse("ok")
    else:
        return HttpResponse("NAO_EXISTE")


def login(request):
    return render(request, "erro.html")

def erro(request):
    return render(request, "erro.html")


def logout(request):
    request.session.flush()
    return redirect("/")
