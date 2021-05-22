import comps from "../componentes/componentes.js"

const app = Vue.createApp({})
app.component('wsi_button', comps.WsiButtons.WsiButton)
app.component('wsi_button_float', comps.WsiButtons.WsiButtonFloat)
app.component('wsi_modal', comps.WsiModal)
app.component('wsi_login', comps.WsiLogin)
app.component('wsi_cadastro', comps.WsiCadastro)
app.component('wsi_card_playlist', comps.WsiCardComps.WsiCardPlaylist)
app.component('wsi_input', comps.WsiInputComps.WsiInput)
app.component('wsi_input_group_left', comps.WsiInputComps.WsiInputGroupLeft)
app.component('wsi_video_player_iframe', comps.WsiVideoPlayerIframe)
app.mount("#app")
$("#ano").text(new Date().getFullYear())
$("#botao_opcoes").click(function () {
    $("#painel").fadeToggle(700)
})