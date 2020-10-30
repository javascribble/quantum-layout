export default `
<style>
    :host {
        display: flex;
        height: 100%;
    }

    :host([stack]) {
        flex-direction: column;
    }

    :host([stack]) > ::slotted(:not(:last-child)) {
        resize: vertical;
    }

    :host(:not([stack])) > ::slotted(:not(:last-child)) {
        resize: horizontal;
    }

    ::slotted(*) {
        overflow: auto;
    }

    ::slotted(:last-child) {
        flex-grow: 1;
    }
</style>
<slot></slot>
`; 