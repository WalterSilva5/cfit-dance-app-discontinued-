from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import redirect
from cfit.sessionTester import login_required
from cfit.sessionTester import adm_required

@login_required
def home(request):
    return render(request, 'home.html')


@login_required
@adm_required
def home_adm(request):
    return render(request, "home_adm.html")