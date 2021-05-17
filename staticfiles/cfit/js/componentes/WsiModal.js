const WsiModal = {
    template: `
    <!-- modal login -->
    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content w3-black rounded" style="background-color: rgb(5.8%, 5.8%, 5.8%);">
                <div class="modal-header w3-border-black" style="background-color: rgb(5.8%, 5.8%, 5.8%);">
                    <h1 class="h1 w-100 text-center font-weight-bold"><slot name="modal_header"></slot></h1>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="background-color: rgb(5.8%, 5.8%, 5.8%);">
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