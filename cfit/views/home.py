from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from cfit.sessionTester import SessionTester
# Create your views here.

def home(request):
    if(SessionTester().verifica_logado(request)):
        return render(request, 'home.html')
    else:
        return redirect("home")
