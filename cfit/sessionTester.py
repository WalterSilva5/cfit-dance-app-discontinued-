class SessionTester():
    def verifica_logado(self, request):
        try:
            usuario=request.session["usuario"]
        except:
            return False
        else:
            return True