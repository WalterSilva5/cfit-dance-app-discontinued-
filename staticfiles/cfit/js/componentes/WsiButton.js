const WsiButton = {
    template: `
        <button class="btn btn-lg cfit-button px-3"
        ><slot><b>BUTTON</b></slot></button>
    `,
};

const WsiButtonFloat = {
    template: `
    <div class="col-4" style="border:1px solid black;">
        <div class="col-md-4 ml-auto"  style="border:1px solid black;">
                <div style="border:1px solid black;">
                    <div class="col-12 ml-auto" style="border:1px solid black;">
                        <wsi_button id="botao_opcoes" class="w3-black" style="border:1px solid black;">
                            <div class="row justify-content-center text-center">
                                <div class="col-4">
                                    <img class="img-fluid" src="/static/cfit/img/conta.png">
                                </div>
                            </div>
                    </wsi_button>
                    <div style="position:absolute;z-index: 99;">
                        <div class="col-sm-12  botao_opcoes_class">
                            <div id="painel" class="cfit-div-dark py-2 px-2 col-lg-12 rounded  botao_opcoes_class"
                                style="display:none; z-index: max">
                                <div>
                                    <div class="my-2">
                                        <a href="#">
                                            <wsi_button class="col-sm-12 w3-red botao_opcoes_class"><b class=" botao_opcoes_class">OPÇÕES</b>
                                            </wsi_button>
                                        </a>
                                    </div>
                                    <div class="my-2">
                                        <a href="/login/logout">
                                            <wsi_button class="col-sm-12 w3-red botao_opcoes_class"><b class=" botao_opcoes_class">SAIR</b>
                                            </wsi_button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
};

const WsiButtons = {
    WsiButton,
    WsiButtonFloat
}
export default WsiButtons;