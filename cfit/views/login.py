from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.models import Usuario
from django.shortcuts import redirect
from cfit.sessionTester import not_logged_only

# Create your views here.

@csrf_exempt
def efetuar_login(request):
    usuario = request.POST["login_usuario"]
    senha = request.POST["login_senha"]
    if(Usuario.objects.filter(usuario=usuario)):
        request.session["usuario"]=usuario
        return HttpResponse("ok")
    else:
        return HttpResponse("NAO_EXISTE")

@not_logged_only
def login(request):
    return render(request, "login.html")

def logout(request):
    request.session.flush()
    return redirect("/")