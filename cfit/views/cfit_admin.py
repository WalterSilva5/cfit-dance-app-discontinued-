from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.sessionTester import login_required
from cfit.sessionTester import adm_required
from cfit.models import Playlist
@adm_required
def cfit_admin(request):
    return render(request, 'cfit_admin/cfit_admin.html')

@adm_required
def cfit_admin_playlists(request):
    playlists = list(Playlist.objects.all().values())
    return render(request, 'cfit_admin/cfit_admin_playlists.html', {"playlists": playlists})

@csrf_exempt
def cfit_admin_playlists_cadastrar(request):
    nome = request.POST["cadastro_playlist_nome"].upper()
    imagem = request.POST["cadastro_playlist_imagem"]
    descricao = request.POST["cadastro_playlist_descricao"].upper()
    playlist = Playlist(nome=nome, imagem=imagem, descricao=descricao)
    playlist.save()
    return redirect("cfit_admin_playlists")