sucesso = function(mensagem) {
    alert(mensagem);
};

erro = function(mensagem) {
    $("#alert_cadastro_msg").text(mensagem);
    $("#alert_cadastro").removeAttr("hidden");
    $("#alert_cadastro").show();
};

cadastrar_usuario = function() {
    usuario_cadastro = $("#usuario_cadastro").val();
    senha_cadastro = $("#senha_cadastro").val();
    if (usuario_cadastro && senha_cadastro) {
        $.ajax({
            type: "post",
            url: "/cadastro/cadastrar",
            data: {
                usuario_cadastro,
                senha_cadastro,
            },
            success: function(result) {
                console.log(result);
                $("#alert_cadastro").hide();
                $("#usuario_cadastro_invalid").hide()
                $("#senha_cadastro_invalid").hide()
            },
            error: function(result) {
                console.log(result);
            },
        });
    } else {
        erro("PREENCHA TODOS OS CAMPOS");
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