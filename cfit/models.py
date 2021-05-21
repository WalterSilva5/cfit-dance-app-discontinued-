from django.db import models
from functools import partial


class Usuario(models.Model):
    usuario = models.CharField('usuario', max_length=100, null=False, blank=False, unique=True)
    senha = models.CharField('senha', max_length=100, null=False, blank=False)
    bloqueado = models.BooleanField('bloqueado', default=False)
    nivel_de_acesso = models.IntegerField('nivel_de_acesso', null=False, blank=False, default=1)

def _update_filename(instance, filename):
    return 'imagens/playlists/'+str(instance.nome)+".jpg"
    

def dir_upload():
    return partial(_update_filename)

class Playlist(models.Model):
    nome = models.CharField('nome', max_length=255, unique=True)
    desabilitada = models.BooleanField('desabilitada', null=False, default=False)
    descricao = models.CharField('descricao', max_length=255, null=True, default='')
    imagem = models.CharField('imagem', max_length=255, null=True, default='')
    #imagem = models.ImageField("imagem", upload_to=dir_upload(), height_field=None, width_field=None, max_length=100)
    
class Video(models.Model):
    nome = models.CharField('nome', max_length=255, null=False, default="")
    posicao = models.IntegerField('posicao', null=False, default=0)
    playlist_id = models.IntegerField('playlist_id', null=False)
    #imagem = models.ImageField("imagem", upload_to=dir_upload(), height_field=None, width_field=None, max_length=100)
    link = models.CharField('link', max_length=255, null=False, default='')
    
class Mensagem(models.Model):
    nome = models.CharField('nome', max_length=255, null=False, default="")
    mensagem = models.CharField('mensagem', max_length=255, null=False, default="")
    tipo = models.IntegerField('tipo', null=False, default=0)

class Config(models.Model):
    index_video = models.CharField('index_video', max_length=255, null=False, default="")
    index_banner = models.CharField('index_video', max_length=255, null=False, default="")