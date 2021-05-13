const CfitBotao = {
    props: {
        dt_target: String,
        dt_toggle: String,
    },
    template: `
        <button 
            class="btn btn-lg font-weight-bold"
            :data-target="dt_target"
            :data-toggle="dt_toggle"
        ><slot></slot></button>
    `,
};

export default CfitBotao;