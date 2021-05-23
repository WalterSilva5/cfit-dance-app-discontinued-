const WsiCadastro = {
    template: `
    <div id="form_cadastro_div" class="cfit-div-dark rounded col-md-12">
        <form id="form_cadastro" autocomplete="off">
            <div class="text-left">
                <div class="col-12 my-2">
                    <label for="cadastro_nome" class="h5"><b>NOME</b></label>
                    <span id="cadastro_nome_erro" class="text-danger"></span>
                    <input class="form-control" id="cadastro_nome" v-model="cadastro_nome" v-bind:value>
                </div>
                <div class="col-12 my-2">
                    <label for="cadastro_usuario" class="h5"><b>LOGIN</b></label>
                    <span id="cadastro_usuario_erro" class="text-danger"></span>
                    <input class="form-control" id="cadastro_usuario" v-model="cadastro_usuario" v-bind:value>
                </div>
                <div class="col-12 my-2">
                    <label for="cadastro_senha" class="h5"><b>SENHA</b></label>
                    <span id="cadastro_senha_erro" class="text-danger"></span>
                    <input class="form-control" id="cadastro_senha" type="password" required v-model="cadastro_senha"
                        v-bind:value>
                        <wsi_button id="exibir_senha" class="col-12 btn-sm" type="button">EXIBIR SENHA</wsi_button>
                </div>
                <div class="col-12 my-2">
                    <label for="cadastro_confirme_senha" class="h5"><b>CONFIRME A SENHA</b></label>
                    <span id="cadastro_confirme_senha_erro" class="text-danger"></span>
                    <input class="form-control" id="cadastro_confirme_senha" type="password" required
                        v-model="cadastro_confirme_senha" v-bind:value>
                </div>
            </div>
        </form>
        <h5 id="cadastro_alert_erro" class="alert alert-danger" style="display: none"></h5>
        <h5 id="cadastro_alert_sucesso" class="alert alert-success" style="display: none"><b>SUCESSO! JÁ PODE FAZER LOGIN.</b></h5>
        <wsi_button id="button_cadastrar" class="w3-orange mx-1 my-3" v-on:click="cadastrar_usuario">CADASTRAR</wsi_button>
    </div>
    `,
    data() {
        return {
            cadastro_nome_valid: false,
            cadastro_usuario_valid: false,
            cadastro_senha_valid: false,
            cadastro_nome: "",
            cadastro_usuario: "",
            cadastro_email: "",
            cadastro_senha: "",
            cadastro_confirme_senha: "",
        }
    },
    watch: {
        cadastro_nome(novo_nome, nome_anterior) {
            this.cadastro_nome = novo_nome.toUpperCase()
            if (this.cadastro_nome.length < 5) {
                $("#cadastro_nome_erro").text(" *NOME DEVE TER NO MINIMO 5 LETRAS")
            } else {
                $("#cadastro_nome_erro").text(" ")
            }
        },
        cadastro_usuario(novo_usuario, usuario_anterior) {
            this.cadastro_usuario = novo_usuario.toUpperCase().replace(/\s/g, '')
            if (this.cadastro_usuario.length < 5) {
                $("#cadastro_usuario_erro").text(" *LOGIN DEVE TER NO MINIMO 5 LETRAS")
            } else {
                $("#cadastro_usuario_erro").text(" ")
                this.cadastro_usuario_valid = true
            }
        },

        cadastro_email(novo_email, email_anterior) {
            this.cadastro_email = novo_email
        },
        cadastro_senha(nova_senha, senha_anterior) {
            this.cadastro_senha = nova_senha.replace(/\s/g, '')
            var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})/;
            if (this.cadastro_senha.length < 5) {
                $("#cadastro_senha_erro").text("* A SENHA DEVE SER MAIOR")
            } else if (!regex.exec(this.cadastro_senha)) {
                $("#cadastro_senha_erro").text(
                    `* A senha deve conter no mínimo 1 caracteres em maiúsculo e 1 número!`
                )
            } else {
                $("#cadastro_senha_erro").text("")
                if (this.cadastro_confirme_senha != this.cadastro_senha) {
                    $("#cadastro_confirme_senha_erro").text("SENHAS NÃO CORRESPONDEM")
                } else {
                    $("#cadastro_confirme_senha_erro").text(" ")
                    this.cadastro_senha_valid = true
                }
            }
        },
        cadastro_confirme_senha(nova_confirme_senha, senha_confirme_anterior) {
            this.cadastro_confirme_senha = nova_confirme_senha.replace(/\s/g, '')
            if (this.cadastro_confirme_senha != this.cadastro_senha) {
                $("#cadastro_confirme_senha_erro").text("SENHAS NÃO CORRESPONDEM")
            } else {
                $("#cadastro_confirme_senha_erro").text(" ")
                this.cadastro_senha_valid = true
            }
        }
    },
    methods: {
        cadastrar_usuario: function () {
            let erro_cadastro = function (mensagem) {
                $("#cadastro_alert_erro").text(mensagem)
                $("#cadastro_alert_erro").show()
                $("#cadastro_alert_sucesso").hide()
            }
            if (
                this.cadastro_usuario_valid &&
                this.cadastro_senha_valid
            ) {
                $.ajax({
                    type: "post",
                    url: "/cadastro/cadastrar/",
                    data: {
                        cadastro_usuario: this.cadastro_usuario,
                        cadastro_senha: this.cadastro_senha,
                    },
                    success: function (result) {
                        if (result == "cadastro_efetuado") {
                            $("#cadastro_alert_sucesso").show()
                            $("#cadastro_alert_erro").hide()
                            $("#form_cadastro").trigger("reset")
                        } else if (result == "ja_cadastrado") {
                            erro_cadastro("USUARIO JÁ ESTÁ CADASTRADO!")
                        } else if (result == "usuario_menor_que_4") {
                            erro_cadastro("NOME DE USUARIO DEVE TER PELO MENOS 4 LETRAS!")
                        }
                    },
                    error: function (result) {
                        console.log(result)
                        erro_cadastro(result.statusText)
                    }
                })
            } else {
                erro_cadastro("PREENCHA TODOS OS CAMPOS")
                if (!(this.cadastro_usuario_valid)) {
                    $("#cadastro_usuario_invalid").show()
                } else {
                    $("#cadastro_usuario_invalid").hide()
                }
                if (!(this.cadastro_senha_valid)) {
                    $("#cadastro_senha_invalid").show()
                } else {
                    $("#cadastro_senha_invalid").hide()
                }
            }
        }
    }
}






export default WsiCadastro