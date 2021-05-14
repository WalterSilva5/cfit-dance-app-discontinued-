erro_cadastro = function (mensagem) {
    $("#alert_cadastro_msg").text(mensagem)
    $("#alert_cadastro").show()
    $("#cadastro_alert_sucesso").hide()
};

cadastrar_usuario = function () {
    usuario_cadastro = $("#usuario_cadastro").val()
    senha_cadastro = $("#senha_cadastro").val()
    if (usuario_cadastro && senha_cadastro) {
        $.ajax({
            type: "post",
            url: "/cadastro/cadastrar",
            data: {
                usuario_cadastro,
                senha_cadastro,
            },
            success: function (result) {
                $("#cadastro_alert_sucesso").show()
                $("#alert_cadastro").hide()
                $("#form_cadastro").trigger("reset")
            },
            error: function (result) {
                console.log(result)
                erro_cadastro(result.statusText)
            },
        });
    } else {
        erro_cadastro("PREENCHA TODOS OS CAMPOS")
        if (!usuario_cadastro) {
            $("#usuario_cadastro_invalid").show()
        } else {
            $("#usuario_cadastro_invalid").hide()
        }
        if (!senha_cadastro) {
            $("#senha_cadastro_invalid").show()
        } else {
            $("#senha_cadastro_invalid").hide()

        }
    }
};
//login

erro_login = function (mensagem) {
    $("#alert_login_msg").text(mensagem)
    $("#alert_login").removeAttr("hidden")
    $("#alert_login").show()
};

efetuar_login = function () {
    usuario_login = $("#usuario_login").val()
    senha_login = $("#senha_login").val()
    if (usuario_login && senha_login) {
        $.ajax({
            type: "post",
            url: "/login/efetuar_login",
            data: {
                usuario_login,
                senha_login,
            },
            success: function (result) {
                if (result == "ok") {
                    window.location.replace("/home")
                }
            },
            error: function (result) {
                erro_login(result)
                console.log(result)
            }
        });
    } else {
        alert("preencha todos os campos!")
    }
}
//fim verificar inputs
//verificar se usuario esta logado

//fim verificar se usuario esta logado