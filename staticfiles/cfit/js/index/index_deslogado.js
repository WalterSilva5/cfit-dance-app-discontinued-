$(document).ready(function (e) {
    $("#button_enviar_mensagem").prop("disabled", true);
    let v1 = Math.floor(Math.random() * 20)
    let v2 = Math.floor(Math.random() * 20)
    let v3 = v1 + v2
    $("#v1").html(v1)
    $("#v2").html(v2)

    $("#resposta").on("change",
        () => {
            if ($("#resposta").val() == v3) {
                $("#alert_mensagem").hide()
                $("#button_enviar_mensagem").prop("disabled", false);
            } else {
                $("#button_enviar_mensagem").prop("disabled", true);
                $("#alert_mensagem").show()
            }
        })


    $("#btn_cadastre_se").on("click", function () {
        $("#modal_login").modal("toggle")
    });
    $("#mapa").fadeIn(2000)
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
            url: "/cadastro/cadastrar/",
            data: {
                cadastro_usuario,
                cadastro_senha,
            },
            success: function (result) {
                if (result == "cadastro_efetuado") {
                    $("#cadastro_alert_sucesso").show()
                    $("#alert_cadastro").hide()
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

//###############################################################
$('#openInViewerButtonIcon').hide()
$('button').hide()