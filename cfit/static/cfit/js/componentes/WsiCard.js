const WsiCardPlaylist = {
    template: `
    <div class="col-xs-4" style="width:100%;max-width:none;padding:0;">
        <div class="cfit-card" style="height:350px; border-radius:3px; display:none;">
            <h3 class="container text-center" style="text-shadow: 1px 1px 15px #2b2b2b"><b><slot name="playlist_title"></slot></b></h3>
            <div class="container"><slot name="playlist_img"></slot></div>
            <div class="text-center container-fluid font-weight-bold" style="overflow:hidden; font-family:'Lucida Console', monospace,'Courier New';">
                <h6 style="text-shadow: 0px 1px 5px #2b2b2b"><slot name="playlist_descricao"></slot></h6>
            </div>
        </div>
    </div>
    `,
};

const WsiCardComps = {
    WsiCardPlaylist
}
export default WsiCardComps;