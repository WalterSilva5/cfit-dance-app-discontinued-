from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import redirect
from cfit.sessionTester import login_required
from cfit.models import Playlist, Video



@login_required
def home(request):
    data = {"playlists": list(Playlist.objects.filter(desabilitada=False).values())}    
    if request.session["nivel_de_acesso"] == 2:
        data["botao_admin"] = "<a href='/cfit_admin'><wsi_button class='cfit-button-admin my-2'>PAINEL ADMINISTRATIVO</wsi_button></a>"
   

    return render(request, 'home.html', data)

@login_required
def play(request):
    playlist_nome = request.GET["playlist_nome"]
    playlist = list(Playlist.objects.filter(nome=playlist_nome).values())[0]
    videos = list(Video.objects.filter(playlist_id = playlist["id"]).values())
    data = {"videos": videos, "playlist_nome": playlist_nome}
    return render(request, 'play.html', data)