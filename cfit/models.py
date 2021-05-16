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
    descricao = models.CharField('descricao', max_length=255, null=True, default='')
    #imagem = models.ImageField("imagem", upload_to=dir_upload(), height_field=None, width_field=None, max_length=100)
    imagem = models.CharField('imagem', max_length=255, null=True, default='')
    
class Aparelho(models.Model):
    nome = models.CharField('nome', max_length=255, unique=True)
    dica = models.CharField('dica', max_length=255, null=True, default='')


class Exercicio(models.Model):
    nome = models.CharField('nome', max_length=255, unique=True)
    dica = models.CharField('dica', max_length=255, null=True, default='')
    series = models.IntegerField('series', null=True, default='')
    duracao = models.CharField('duracao', max_length=255, null=True, default='')
    carga = models.CharField('carga', null=True, default='', max_length=255)
