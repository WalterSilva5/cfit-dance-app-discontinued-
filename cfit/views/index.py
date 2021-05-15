from django.shortcuts import render
from django.http import HttpResponse
from cfit.sessionTester import not_logged_only

def index(request):
    return render(request, 'index_deslogado.html')
