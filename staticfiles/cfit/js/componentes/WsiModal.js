const WsiModal = {
    template: `
    <!-- modal login -->
    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content w3-black w3-border w3-border-orange rounded">
                <div class="modal-header">
                    <h1 class="w-100 text-center font-weight-bold"><slot name="modal_header"></slot></h1>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="modal_body"></slot>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal login -->
    `,
};

export default WsiModal;


// exemplo de slot 
// <wsi_modal id="modal_login" class="text-center">
// <template v-slot:modal_header>
//     CFIT LOGIN
// </template>
// <template v-slot:modal_body>
//     <wsi_login></wsi_login>
// </template>
// </wsi_modal>