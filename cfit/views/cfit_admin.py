from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.sessionTester import login_required
from cfit.sessionTester import adm_required
from cfit.models import Playlist, Video


@adm_required
def cfit_admin(request):
    return render(request, 'cfit_admin/cfit_admin.html')


@adm_required
def cfit_admin_playlists(request):

    playlists = list(Playlist.objects.all().values())
    return render(request, 'cfit_admin/cfit_admin_playlists.html', {"playlists": playlists})


@csrf_exempt
def cfit_admin_playlists_cadastrar(request):
    try:
        nome = request.POST["cadastro_playlist_nome"].upper()
        imagem = request.POST["cadastro_playlist_imagem"]
        descricao = request.POST["cadastro_playlist_descricao"].upper()
        playlist = Playlist(nome=nome, imagem=imagem, descricao=descricao)
        playlist.save()
        return render(request, "cfit_admin/cfit_admin_playlists.html", {"erro": "<h4 class='alert alert-success'>SUCESSO</h4>"})
    except Exception as e:
        return render(request, "cfit_admin/cfit_admin_playlists.html", {"erro": f"<h4 class='alert alert-danger'>ERRO: ${e}</h4>"})


def cfit_admin_playlists_aditar(request):
    playlist = list(Playlist.objects.filter(
        nome=request.GET["playlist"]).values())[0]
    return render(request, "cfit_admin/cfit_admin_playlists_aditar.html", {"playlist": playlist})


def cfit_admin_playlists_adicionar_aula(request):
    playlists = list(Playlist.objects.all().values())
    return render(request, "cfit_admin/cfit_admin_playlists_adicionar_aula.html", {"playlists": playlists})


def cfit_admin_playlists_adicionar_aula_adicionar(request):
    try:
        nome = request.POST["nome_do_video"].upper()
        link = request.POST["link_do_video"].split("view")[0]+"preview"
        playlist_id = request.POST["select_id_da_playlist"]
        posicao = 0
        video = Video(nome=nome, link=link,
                    playlist_id=playlist_id, posicao=posicao)
        video.save()
        return redirect("cfit_admin_playlists", {"erro": "<h4 class='alert alert-success'>SUCESSO</h4>"})
    except Exception as e:
        return redirect("cfit_admin_playlists", {"erro": f"<h4 class='alert alert-danger'>ERRO: ${e}</h4>"})