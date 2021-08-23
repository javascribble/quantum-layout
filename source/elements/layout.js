import layout from '../templates/layout.js';

export class Layout extends Quantum {
    static get observedAttributes() { return ['stack', 'leaf']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!this.leaf && !this.children.length) {
            this.remove();
        }
    }

    save() {
        for (const element of this.slots.get('')) {
            const { width, height } = element.style;
            localStorage.setItem(element.id, JSON.stringify({ width, height }));
        }
    }

    load() {
        for (const element of this.slots.get('')) {
            Object.assign(element.style, JSON.parse(localStorage.getItem(element.id)));
        }
    }
}

Layout.define('quantum-layout', layout);