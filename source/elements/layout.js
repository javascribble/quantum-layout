import html from '../templates/layout.js';

const { Component, template, define } = quantum;

export class Layout extends Component {
    static template = template(html);

    static get observedAttributes() { return ['stack']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (currentElements.length === 0) {
            this.remove();
        }
    }

    serialize() {

    }

    deserialize(data) {

    }
}

define('quantum-layout', Layout);