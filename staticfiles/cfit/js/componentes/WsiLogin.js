const WsiLogin = {
    template: `
    <div class="row d-flex justify-content-center text-center">
        <div class="col-12 w3-black py-4 rounded border w3-border-deep-orange">
            <form id="form-login" autocomplete="off" class="container">
                <label for="login_usuario" class="p-0 float-left font-weight-bold">Usuario <span class="text-danger" id="login_usuario_invalid" style="display:none">* CAMPO OBRIGATORIO!</span></label>
                <input class="form-control" name="login_usuario" id="login_usuario" type="text">
                <div class="my-2">
                    <label for="login_senha" class="p-0 float-left font-weight-bold"><b>Senha</b><span class="text-danger" id="login_senha_invalid" style="display:none">* CAMPO OBRIGATORIO</span></label>
                    <input class="form-control" name="login_senha" id="login_senha" type="password">
                </div>
                <div class="alert alert-danger my-2" id="login_alert" role="alert" style="display: none;">
                    <h3 id="login_alert_msg"></h3>
                </div>
            </form>
            <wsi_button class="mx-1 mt-4 w3-xlarge" onclick="efetuar_login()"  style="filter: sepia(15%);">LOGIN</wsi_button>
            <div class="mt-5">
                <div class="col-12 d-flex justify-content-center">
                    <div>
                        Não cadastrado?
                        <button data-target="#modal_cadastro" data-toggle="modal" id="btn_cadastre_se" class="btn w3-blue">
                            <b class="font-weight-bold">CADASTRE-SE</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    methods: {
        login_erro: function (mensagem) {
            $("#login_alert_msg").text(mensagem)
            $("#login_alert").show()
        },

        efetuar_login: function () {
            login_usuario = $("#login_usuario").val().toUpperCase()
            if (!login_usuario) {
                $("#login_usuario_invalid").show()
            }
            login_senha = $("#login_senha").val()
            if (!login_senha) {
                $("#login_senha_invalid").show()
            }
            if (login_usuario && login_senha) {
                $.ajax({
                    type: "post",
                    url: "/login/efetuar_login",
                    data: {
                        login_usuario,
                        login_senha,
                    },
                    success: function (result) {
                        if (result == "ok") {
                            $("#form-login").trigger("reset");
                            window.location.replace("/home")
                        } else if (result == "nao_cadastrado") {
                            $this.login_erro("USUARIO NÃO CADASTRADO")
                        } else if (result = "usuario_menor_que_4") {
                            $this.login_erro("USUARIO INVALIDO")
                        } else {
                            console.log(result)
                        }
                    },
                    error: function (result) {
                        $this.login_erro(result.statusText)
                        console.log(result)
                    }
                });
            } else {
                $this.login_erro("PREENCHA TODOS OS CAMPOS")
            }
        },
    }
}






export default WsiLogin;