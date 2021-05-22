const WsiLogin = {
    template: `
    <div class="row d-flex justify-content-center text-center">
        <div class="container mx-2 cfit-div-dark rounded">
            <div class="col-12 py-4">
                <form id="form-login" autocomplete="off" class="container">
                    <label for="login_usuario" class="p-0 float-left font-weight-bold">Usuario <span class="text-danger login_usuario_invalid"
                        style="display:none">* CAMPO OBRIGATORIO!</span></label>
                    <input class="form-control form-control-lg" name="login_usuario" id="login_usuario" type="text" v-model="login_usuario" v-bind:value>
                    <div class="my-2">
                        <label for="login_senha" class=" p-0 float-left font-weight-bold"><b>Senha</b><span class="login_senha_invalid text-danger"
                                style="display:none">* CAMPO OBRIGATORIO</span></label>
                        <input class="form-control form-control-lg login_senha" name="login_senha" id="login_senha" type="password"
                        v-model="login_senha" v-bind:value>
                    </div>
                    <div class="alert alert-danger my-2 login_alert" role="alert" style="display: none">
                        <h3 class="login_alert_msg"></h3>
                    </div>
                </form>
                <wsi_button class="mx-1 mt-4 w3-xlarge col-8 w3-orange" v-on:click="efetuar_login">LOGIN</wsi_button>
                <div class="mt-5">
                    <div class="col-12 d-flex justify-content-center">
                        <div>
                            Não cadastrado?
                            <button data-target="#modal_cadastro" data-toggle="modal" id="btn_cadastre_se"
                                class="btn btn-dark w3-text-orange">
                                <b class="font-weight-bold h5">CADASTRE-SE</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            login_usuario: "",
            login_senha: "",
        }
    },
    watch: {
        login_usuario(novo_usuario, usuario_anterior) {
            this.login_usuario = novo_usuario.toUpperCase().replace(/\s/g, '')
        },
        login_senha(nova_senha, senha_anterior) {
            this.login_senha = nova_senha
        }
    },
    methods: {
        efetuar_login: function () {
            let login_erro = function (mensagem) {
                $(".login_alert_msg").text(mensagem)
                $(".login_alert").show()
            }
            if (this.login_usuario == "") {
                $(".login_usuario_invalid").show()
            } else {
                $(".login_usuario_invalid").hide()

            }
            if (this.login_senha == "") {
                $(".login_senha_invalid").show()
            } else {
                $(".login_senha_invalid").hide()
            }
            if (this.login_usuario != "" && this.login_senha != "") {
                $.ajax({
                    type: "post",
                    url: "/login/efetuar_login/",
                    data: {
                        login_usuario: this.login_usuario,
                        login_senha: this.login_senha,
                    },
                    success: function (result) {
                        if (result == "ok") {
                            $("#form-login").trigger("reset")
                            window.location.replace("/home")
                        } else if (result == "nao_cadastrado") {
                            login_erro("USUARIO NÃO CADASTRADO")
                        } else if (result == "usuario_menor_que_4") {
                            login_erro("USUARIO INVALIDO")
                        } else if (result == "senha_invalida") {
                            login_erro("VERIFIQUE SUA SENHA!")
                        } else if (result == "conta_bloqueada") {
                            login_erro("CONTA BLOQUEADA!")
                        } else {
                            console.log(result)
                        }
                    },
                    error: function (result) {
                        login_erro(result.statusText)
                        console.log(result)
                    }
                })
            } else {
                login_erro("PREENCHA TODOS OS CAMPOS")
            }
        },
    }
}






export default WsiLogin