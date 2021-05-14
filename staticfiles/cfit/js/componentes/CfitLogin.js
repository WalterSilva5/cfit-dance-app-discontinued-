const CfitLogin = {
    template: `
    <div class="row d-flex justify-content-center text-center">
        <div class="col-12 w3-black py-4 rounded" style="border: 3px solid orange;">
            <form id="form-login" autocomplete="off">
                <label for="login_usuario" class="p-0 float-left">Usuario <span class="text-danger" id="login_usuario_invalid" style="display:none">* CAMPO OBRIGATORIO!</span></label>
                <input class="form-control" name="login_usuario" id="login_usuario" type="text">
                <div class="my-2">
                    <label for="login_senha" class="p-0 float-left">Senha <span class="text-danger" id="login_senha_invalid" style="display:none">* CAMPO OBRIGATORIO</span></label>
                    <input class="form-control" name="login_senha" id="login_senha" type="password">
                </div>
                <div class="alert alert-danger my-2" id="login_alert" role="alert" style="display: none;">
                    <h3 id="login_alert_msg"></h3>
                </div>
            </form>
            <cfit-button class="w3-orange mx-1 mt-4 w3-xlarge" onclick="efetuar_login()">LOGIN</cfit-button>
            <div class="mt-3">
                <div class="col-12 d-flex justify-content-center">
                    <div>
                        Não cadastrado?
                        <cfit-button class="w3-red text-light" data-target="#modal_cadastro" data-toggle="modal">
                            CADASTRE-SE
                        </cfit-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export default CfitLogin;