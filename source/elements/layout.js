import layout from '../templates/layout.js';

export class Layout extends Quantum {
    static get observedAttributes() { return ['stack', 'leaf']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!this.leaf && !this.children.length) {
            this.remove();
        }
    }
}

Layout.define('quantum-layout', layout);