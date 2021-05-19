const WsiCardPlaylist = {
    template: `
    <div class="col-xs-4 hvr hvr-float-shadow cfit-card" style="width:100%;max-width:none;padding:0; display:none;">
        <div class="w3-text-white cfit-div-dark" style="height:320px; border-radius:10px;">
            <h3 class="container"><b><slot name="playlist_title"></slot></b></h3>
            <div class="container"><slot name="playlist_img"></slot></div>
            <div class="text-center container-fluid font-weight-bold" style="overflow:hidden;height:20%; width:300px;">
                <text><slot name="playlist_descricao"></slot></text>
            </div>
        </div>
    </div>
    `,
};

const WsiCardComps = {
    WsiCardPlaylist
}
export default WsiCardComps;