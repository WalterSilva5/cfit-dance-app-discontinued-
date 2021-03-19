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


def professor_logado(request):
    try:
        professor = request.session["professor"]
        if request.session["professor"] == "" or request.session["professor"] == None:
            return False
        else:
            return True
    except:
        
        return False
