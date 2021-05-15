const WsiInput = {
    template: `
    <input type="text" class="form-control">
    `,
};

const WsiInputGroupLeft = {
    template: `
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text"><slot name="slot_label_left"></slot></div>
      </div>
      <slot name="slot_input"></slot>
    </div>
    `,
};

const WsiInputComps = {
    WsiInput,
    WsiInputGroupLeft
}
export default WsiInputComps;