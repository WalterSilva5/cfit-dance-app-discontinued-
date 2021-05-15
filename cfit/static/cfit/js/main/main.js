import comps from "../componentes/componentes.js";
const app = Vue.createApp({})
app.component('wsi_button', comps.WsiButton)
app.component('wsi_modal', comps.WsiModal)
app.component('wsi_login', comps.WsiLogin)
app.component('wsi_card_playlist', comps.WsiCardComps.WsiCardPlaylist)
app.component('wsi_input', comps.WsiInputComps.WsiInput)
app.component('wsi_input_group_left', comps.WsiInputComps.WsiInputGroupLeft)
app.mount("#app");

$(document).ready(
    $("#ano").text(new Date().getFullYear())
)
