from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cfit.sessionTester import login_required
from cfit.sessionTester import adm_required
from cfit.models import *


def prepare_video_url(url):
    if '/view' in url:
        return url.split('/view')[0]+'/preview'
    elif '/preview' in url:
        return url.split('/preview')[0]+'/preview'
    else:
        return url


@adm_required
def cfit_admin(request):
    return render(request, 'cfit_admin/cfit_admin.html')


# USUARIOS
@adm_required
def cfit_admin_usuarios(request):
    usuarios = list(Usuario.objects.all().order_by(
        "-nivel_de_acesso").values())
    return render(request, 'cfit_admin/cfit_admin_usuarios.html', {"usuarios": usuarios})


@adm_required
def cfit_admin_usuarios_editar(request):
    usuario = list(Usuario.objects.filter(id=request.POST["id"]).values())[0]
    return render(request, 'cfit_admin/cfit_admin_usuarios_editar.html', {"usuario": usuario})


@adm_required
def cfit_admin_usuarios_editar_salvar(request):
    usuario = Usuario.objects.get(id=request.POST["id"])
    usuario.bloqueado = request.POST["bloqueado"]
    usuario.nivel_de_acesso = request.POST["adm"]
    usuario.save()
    usuario = list(Usuario.objects.filter(id=request.POST["id"]).values())[0]
    return render(request, 'cfit_admin/cfit_admin_usuarios_editar.html', {"usuario": usuario, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})


# PLAYLISTS
@adm_required
def cfit_admin_playlists(request, kwargs=""):
    playlists = Playlist.objects.all().values()
    return render(request, 'cfit_admin/playlists/playlists.html', {"playlists": playlists})


@adm_required
@csrf_exempt
def cfit_admin_playlists_cadastrar(request):
    playlists = Playlist.objects.all().values()
    try:
        nome = request.POST["cadastro_playlist_nome"].upper()
        imagem = request.POST["cadastro_playlist_imagem"]
        descricao = request.POST["cadastro_playlist_descricao"].upper()
        playlist = Playlist(nome=nome, imagem=imagem, descricao=descricao)
        playlist.save()
        return render(request, "cfit_admin/playlists/playlists.html", {"playlist": playlists, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})
    except Exception as e:
        return render(request, "cfit_admin/playlists/playlists.html", {"playlist": playlists, "msg": f"<h4 class='alert alert-danger'>ERRO: ${e}</h4>"})


@adm_required
def cfit_admin_playlists_aditar(request, msg=""):
    playlist = Playlist.objects.filter(
        nome=request.GET["playlist"]).values()[0]
    videos = Video.objects.filter(
        playlist_id=playlist["id"]).values()
    return render(request, "cfit_admin/playlists/aditar.html", {"videos": videos, "playlist": playlist, "msg": msg})


@adm_required
def cfit_admin_playlists_excluir(request, msg=""):
    Playlist.objects.filter(id=request.GET["id"]).delete()
    Video.objects.filter(playlist_id=request.GET["id"]).delete()
    playlists = Playlist.objects.all().values()

    return render(request, "cfit_admin/playlists/playlists.html", {"playlists": playlists, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})


@adm_required
def cfit_admin_playlists_editar_salvar(request):
    try:
        playlist = Playlist.objects.get(id=request.POST["edit_playlist_id"])
        playlist.nome = request.POST["edit_playlist_nome"].upper()
        playlist.imagem = request.POST["edit_playlist_imagem"]
        playlist.descricao = request.POST["edit_playlist_descricao"].upper()
        playlist.desabilitada = request.POST["edit_playlist_desabilitada"]
        playlist.save()
        playlist = Playlist.objects.get(id=request.POST["edit_playlist_id"])
    except Exception as e:
        msg = f"<h4 class='alert alert-danger'>ERRO: ${e}</h4>"
        return render(request, "cfit_admin/playlists/aditar.html", {"playlist": playlist, "msg": msg})
    else:
        msg = f"<h4 class='alert alert-success'>SUCESSO</h4>"
        return render(request, "cfit_admin/playlists/aditar.html", {"playlist": playlist, "msg": msg})


@adm_required
def cfit_admin_playlists_adicionar_aula(request):
    playlists = Playlist.objects.all().values()
    return render(request, "cfit_admin/playlists/adicionar_aula.html", {"playlists": playlists})


@adm_required
def cfit_admin_playlists_adicionar_aula_adicionar(request):
    playlists = Playlist.objects.all().values()
    try:
        nome = request.POST["nome_do_video"].upper()
        link = prepare_video_url(request.POST["link_do_video"])

        playlist_id = request.POST["select_id_da_playlist"]
        posicao = 0
        video = Video(nome=nome, link=link,
                      playlist_id=playlist_id, posicao=posicao)
        video.save()
        return render(request, "cfit_admin/playlists/playlists.html", {"playlists": playlists, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})
    except Exception as e:
        return render(request, "cfit_admin/playlists/playlists.html", {"playlists": playlists, "msg": f"<h4 class='alert alert-danger'>ERRO: ${e}</h4>"})


@ adm_required
def cfit_admin_playlists_editar_aula(request):
    playlist = Playlist.objects.filter(
        id=request.GET["edit_video_playlist_id"])
    video = Video.objects.filter(id=request.GET["edit_video_id"]).values()[0]
    return render(request, "cfit_admin/playlists/aulas_editar.html", {"video": video})


@ adm_required
def cfit_admin_playlists_aulas_editar_salvar(request):
    playlist = Playlist.objects.filter(
        id=request.POST["edit_video_playlist_id"]).values()[0]

    video = Video.objects.get(id=request.POST["edit_video_id"])
    video.nome = request.POST["edit_video_nome"].upper()
    video.link = prepare_video_url(request.POST["edit_video_link"])
    video.save()
    videos = Video.objects.filter(
        playlist_id=request.POST["edit_video_playlist_id"]).values()
    return render(request, "cfit_admin/playlists/aditar.html", {"playlist": playlist, "videos": videos, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})


@adm_required
def cfit_admin_playlists_aulas_excluir(request):
    Video.objects.filter(id=request.POST["video_id"]).delete()
    playlist = Playlist.objects.filter(
        id=request.POST["edit_video_playlist_id"]).values()[0]
    videos = Video.objects.filter(
        playlist_id=request.POST["edit_video_playlist_id"]).values()
    return render(request, "cfit_admin/playlists/aditar.html", {"playlist": playlist, "videos": videos, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})


# MENSAGENS
def cfit_admin_mensagens(request):
    mensagens = list(Mensagem.objects.all().values())
    return render(request, 'cfit_admin/mensagens.html', {"mensagens": mensagens})


def cfit_admin_mensagens_excluir(request):
    Mensagem.objects.filter(id=request.GET["id"]).delete()
    mensagens = list(Mensagem.objects.all().values())
    return render(request, 'cfit_admin/mensagens.html', {"mensagens": mensagens})


def cfit_admin_ajustes(request):
    try:
        config = Config.objects.all().values()[0]
    except:
        return render(request, 'cfit_admin/ajustes.html')
    else:
        return render(request, 'cfit_admin/ajustes.html', {"config": config})


def cfit_admin_ajustes_salvar(request):
    config = Config.objects.get(id=1)
    config.index_banner = request.POST["index_banner"]
    config.index_video = prepare_video_url(request.POST["index_video"])
    config.save()
    return render(request, 'cfit_admin/ajustes.html', {"config": config, "msg": "<h4 class='alert alert-success'>SUCESSO</h4>"})
