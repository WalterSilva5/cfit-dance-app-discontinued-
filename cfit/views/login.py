from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from django.shortcuts import redirect

# Create your views here.

@csrf_exempt
def efetuar_login(request):
    usuario = request.POST["usuario_login"]
    senha = request.POST["senha_login"]
    if(Usuario.objects.filter(usuario=usuario)):
        request.session["usuario"]=usuario
        return HttpResponse("ok")
    else:
        return HttpResponse("NAO_EXISTE")

def logout(request):
    request.session.flush()
    return redirect("/")