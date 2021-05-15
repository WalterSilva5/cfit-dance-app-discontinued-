const WsiCardPlaylist = {
    template: `
    <div class="col-xs-4 hvr hvr-float-shadow my-2">
        <div class="border w3-orange w3-hover-red mx-2 my-2 rounded" style="height:320px;">
            <h3><b><slot name="playlist_title"></slot></b></h3>
            <div class="container"><slot name="playlist_img"></slot></div>
            <div class="text-center container-fluid" style="overflow:hidden;height:27%; width:300px;">
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