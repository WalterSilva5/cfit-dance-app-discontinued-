from django.urls import path
from cfit.views.views import *
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', index, name='index'),
    path('cadastro/cadastrar', cadastrar, name="cadastrar"),
    path('login/efetuar_login', efetuar_login, name="efetuar_login"),
    path('login/', login, name="login"),
    path('login/erro', erro, name="erro"),
    path('login/logout', logout, name="logout"),
    path('home', home, name="home"),
    path('play', play, name="play"),
    path('cfit_admin', cfit_admin, name="cfit_admin"),
    path('cfit_admin/cfit_admin_playlists', cfit_admin_playlists, name="cfit_admin_playlists"),
    path('cfit_admin/cfit_admin_playlists/cadastrar', cfit_admin_playlists_cadastrar, name="cfit_admin_playlists_cadastrar"),
    path('cfit_admin/cfit_admin_playlists_aditar', cfit_admin_playlists_aditar, name="cfit_admin_playlists_aditar"),
    path('cfit_admin/cfit_admin_playlists_adicionar_aula', cfit_admin_playlists_adicionar_aula, name="cfit_admin_playlists_adicionar_aula"),
    path('cfit_admin/cfit_admin_playlists_adicionar_aula/adicionar', cfit_admin_playlists_adicionar_aula_adicionar, name="cfit_admin_playlists_adicionar_aula_adicionar"),



]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

