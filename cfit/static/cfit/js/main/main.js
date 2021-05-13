import comps from "../componentes/componentes.js";
const app = Vue.createApp({})
app.component('cfit-button', comps.CfitButton)
app.component('cfit-modal', comps.CfitModal)
app.mount("#app");