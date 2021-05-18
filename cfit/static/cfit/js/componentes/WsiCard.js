const WsiCardPlaylist = {
    template: `
    <div class="col-xs-4 hvr hvr-float-shadow " style="width:100%;max-width:none;padding:0;">
        <div class="border w3-hover-red w3-text-white" style="height:320px;background-color: rgb(5.8%, 5.8%, 5.8%); border-radius:10px;">
            <h3 class="container"><b><slot name="playlist_title"></slot></b></h3>
            <div class="container"><slot name="playlist_img"></slot></div>
            <div class="text-center container-fluid" style="overflow:hidden;height:20%; width:300px;">
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