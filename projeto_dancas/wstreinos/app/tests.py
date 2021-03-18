from django.test import TestCase

# Create your tests here.


def usuario_logado(request):
    try:
        usuario = request.session["login"]
        if request.session["login"] == "" or request.session["login"] == None:
            return False
        else:
            return True
    except:
        
        return False
