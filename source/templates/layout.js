export default `
<style>
    :host {
        display: flex;
        height: 100%;
    }

    :host([stack]) {
        flex-direction: column;
    }

    :host([resizing]) {
        cursor: ew-resize
    }    

    :host([resizing][stack]) {
        cursor: ns-resize;
    }

    ::slotted(*) {
        flex-grow: 1;
    }
</style>
<slot></slot>
`;