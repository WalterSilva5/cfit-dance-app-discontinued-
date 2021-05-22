$(document).ready(function (e) {
    $("#button_enviar_mensagem").prop("disabled", true)
    let v1 = Math.floor(Math.random() * 20)
    let v2 = Math.floor(Math.random() * 20)
    let v3 = v1 + v2
    $("#v1").html(v1)
    $("#v2").html(v2)

    $("#resposta").on("change",
        () => {
            if ($("#resposta").val() == v3) {
                $("#alert_mensagem").hide()
                $("#button_enviar_mensagem").prop("disabled", false)
            } else {
                $("#button_enviar_mensagem").prop("disabled", true)
                $("#alert_mensagem").show()
            }
        })

    $("#exibir_senha").mousedown(function () {
        $("#cadastro_senha").attr("type", "text")
    })

    $("#exibir_senha").mouseup(function () {
        $("#cadastro_senha").attr("type", "password")
    })


    $("#btn_cadastre_se").on("click", function () {
        $("#modal_login").modal("toggle")
    })
    $("#mapa").fadeIn(2000)
})