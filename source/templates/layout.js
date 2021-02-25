export default `
<style>
    :host {
        display: flex;
        position: relative;
    }

    :host([stack]) {
        flex-direction: column;
    }

    :host([stack]:not([lock])) > ::slotted(:not([lock]):not(:last-child)) {
        resize: vertical;
    }

    :host(:not([stack]):not([lock])) > ::slotted(:not([lock]):not(:last-child)) {
        resize: horizontal;
    }

    ::slotted(*) {
        overflow: auto;
        flex-basis: 50%;
    }

    ::slotted(:last-child) {
        flex-grow: 1;
    }
</style>
<slot></slot>
`;