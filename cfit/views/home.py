from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import redirect
from cfit.sessionTester import login_required
from cfit.models import Playlist



@login_required
def home(request):
    playlists = list(Playlist.objects.all().values())
    return render(request, 'home.html', {"playlists": playlists})

