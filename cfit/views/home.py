from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import redirect
from cfit.sessionTester import login_required

@login_required
def home(request):
    return render(request, 'home.html')

