from django.urls import path
from cfit.views.views import *
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', index, name='index'),
    path(r'cadastro/cadastrar/', cadastrar, name="cadastrar"),
    path(r'login/efetuar_login/', efetuar_login, name="efetuar_login"),
    path(r'login/', login, name="login"),
    path(r'login/erro/', erro, name="erro"),
    path(r'login/logout/', logout, name="logout"),
    path(r'home/', home, name="home"),
    path(r'play/', play, name="play"),
    path(r'cfit_admin/', cfit_admin, name="cfit_admin"),
    path(r'cfit_admin/cfit_admin_playlists/', cfit_admin_playlists, name="cfit_admin_playlists"),
    path(r'cfit_admin/cfit_admin_playlists/cadastrar/', cfit_admin_playlists_cadastrar, name="cfit_admin_playlists_cadastrar"),
    path(r'cfit_admin/cfit_admin_playlists/excluir/', cfit_admin_playlists_excluir, name="cfit_admin_playlists_excluir"),
    path(r'cfit_admin/cfit_admin_playlists_aditar/', cfit_admin_playlists_aditar, name="cfit_admin_playlists_aditar"),
    path(r'cfit_admin/cfit_admin_playlists_editar_salvar/', cfit_admin_playlists_editar_salvar, name="cfit_admin_playlists_editar_salvar"),
    path(r'cfit_admin/cfit_admin_playlists_adicionar_aula/', cfit_admin_playlists_adicionar_aula, name="cfit_admin_playlists_adicionar_aula"),
    path(r'cfit_admin/cfit_admin_playlists_adicionar_aula/adicionar/', cfit_admin_playlists_adicionar_aula_adicionar, name="cfit_admin_playlists_adicionar_aula_adicionar"),
    path(r'cfit_admin/cfit_admin_playlists_editar_aula/', cfit_admin_playlists_editar_aula, name="cfit_admin_playlists_editar_aula"),
    path(r'cfit_admin/cfit_admin_playlists_aulas_editar_salvar/', cfit_admin_playlists_aulas_editar_salvar, name="cfit_admin_playlists_aulas_editar_salvar"),
    path(r'cfit_admin/cfit_admin_playlists_aulas_excluir/', cfit_admin_playlists_aulas_excluir, name="cfit_admin_playlists_aulas_excluir"),



]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

