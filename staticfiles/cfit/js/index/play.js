$(document).ready(() => {
    $(".botao_menu_player").on("click", function () {
        let v = (this.id.split("-")[0])
        $(".video_player").find("iframe").attr("src",
            $(`#${v}-link`).val()
        );
        $("#video_titulo").text($(`#${v}-titulo`).val())
    })
})