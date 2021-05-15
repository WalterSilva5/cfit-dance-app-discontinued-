from django.shortcuts import render
from django.http import HttpResponse
from cfit.sessionTester import login_required
from cfit.sessionTester import adm_required

@adm_required
def cfit_admin(request):
    return render(request, 'cfit_admin/cfit_admin.html')
