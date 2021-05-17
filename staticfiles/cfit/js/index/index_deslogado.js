$(document).ready(function (e) {
    $("#btn_cadastre_se").on("click", function () {
        $("#modal_login").modal("toggle")
    })
})
erro_cadastro = function (mensagem) {
    $("#alert_cadastro_msg").text(mensagem)
    $("#alert_cadastro").show()
    $("#cadastro_alert_sucesso").hide()
};

cadastrar_usuario = function () {
    cadastro_usuario = $("#cadastro_usuario").val()
    cadastro_senha = $("#cadastro_senha").val()
    if (cadastro_usuario && cadastro_senha) {
        $.ajax({
            type: "post",
            url: "/cadastro/cadastrar",
            data: {
                cadastro_usuario,
                cadastro_senha,
            },
            success: function (result) {
                if(result == "cadastro_efetuado"){
                    $("#cadastro_alert_sucesso").show()
                    $("#alert_cadastro").hide()
                    $("#form_cadastro").trigger("reset")
                }else if(result == "ja_cadastrado"){
                    erro_cadastro("USUARIO JÁ ESTÁ CADASTRADO!")
                }else if(result == "usuario_menor_que_4"){
                    erro_cadastro("NOME DE USUARIO DEVE TER PELO MENOS 4 LETRAS!")
                }
            },
            error: function (result) {
                console.log(result)
                erro_cadastro(result.statusText)
            },
        });
    } else {
        erro_cadastro("PREENCHA TODOS OS CAMPOS")
        if (!cadastro_usuario) {
            $("#cadastro_usuario_invalid").show()
        } else {
            $("#cadastro_usuario_invalid").hide()
        }
        if (!cadastro_senha) {
            $("#cadastro_senha_invalid").show()
        } else {
            $("#cadastro_senha_invalid").hide()
        }
    }
};

//#######################################################################//

//login
login_erro = function (mensagem) {
    $("#login_alert_msg").text(mensagem)
    $("#login_alert").show()
};

efetuar_login = function () {
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
                    login_erro("USUARIO NÃO CADASTRADO")
                } else if (result = "usuario_menor_que_4") {
                    login_erro("USUARIO INVALIDO")
                } else {
                    console.log(result)
                }
            },
            error: function (result) {
                login_erro(result.statusText)
                console.log(result)
            }
        });
    } else {
        login_erro("PREENCHA TODOS OS CAMPOS")
    }
}

$('#openInViewerButtonIcon').hide()
$('button').hide()