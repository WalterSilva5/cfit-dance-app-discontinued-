const WsiVideoPlayerIframe = {
    template: `
        <div class="col-lg-6 mx-0 float-left px-0" style="min-height:350px;">
            <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="${self.link}" frameborder="0" scrolling seamless="" allowfullscreen></iframe>
                    <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;">&nbsp;
                    </div>
            </div>
    </div>
    `,
    data() {
        return {
            link: ""
        }
    },
}
export default WsiVideoPlayerIframe;