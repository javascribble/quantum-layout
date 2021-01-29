import html from '../templates/layout.js';

export class Layout extends Quantum {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['stack']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (currentElements.length === 0) {
            this.remove();
        }
    }
}

Layout.define('quantum-layout', html);