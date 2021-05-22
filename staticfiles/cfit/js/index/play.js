$(document).ready(() => {
    $(".botao_menu_player").on("click", function () {
        let v = (this.id.split("__")[0])
        $("#video__player").find("iframe").attr("src",
            $(`#${v}__link`).val()
        );
        $("#video__titulo").text($(`#${v}__titulo`).val())
        $("#playlist_menu").scrollTop( $(this).position().top );
    })
})