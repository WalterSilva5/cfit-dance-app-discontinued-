$(document).ready(
    function () {
        //testar depois
        $("#form_oferta").submit(function (event) {
            var myData = $(form).serialize();
            $.ajax({
                type: "POST",
                contentType: attr("enctype", "multipart/form-data"),
                url: " URL Goes Here ",
                data: myData,
                success: function (data) {
                    alert(data);
                }
            });
            return false;
        });
        $("#salvar_playlistdd").on("click",
            function () {
                nome = $("#cadastro_playlist_nome").val()
                imagem = $("#cadastro_playlist_imagem")[0]
                descricao = $("#cadastro_playlist_descricao").val()

                if (nome && imagem && descricao) {
                    console.log($("#form_criar_playlist")[0])
                    var form = new FormData($("#form_criar_playlist")[0]);

                    $.ajax({

                        type: "post",
                        url: "/cfit_admin/cfit_admin_playlists/cadastrar",
                        data: form,
                        processData: false,
                        success: function (result) {
                            console.log(result)
                        },
                        error: function (result) {
                            console.log(result)
                        },
                    });
                } else {
                    alert("erro")
                }

            })
        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });

        $("#button_playlists_existentes").on("click",
            function () {
                $("#painel_criar_playlists").hide()
                $("#painel_listagem_playlists").show()
            })

        $("#button_adicionar_nova").on("click",
            function () {
                $("#painel_criar_playlists").show()
                $("#painel_listagem_playlists").hide()
            })

    }
)