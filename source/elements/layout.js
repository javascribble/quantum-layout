import { Component, template, define } from '../import.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    constructor() {
        super();

        this.addEventListener('dragover', this.#dragOver);
    }

    static template = template(html);

    static get observedAttributes() { return ['stack', 'lock', 'persist']; }

    persistAttributeChanged(attribute, previousValue, currentValue) {

    }

    defaultSlotChanged(slot, addedElements, deletedElements, currentElements) {
        if (currentElements.length === 0) {
            this.remove();
        }
    }

    #dragOver(event) {

    }

    serialize() {

    }

    deserialize(data) {

    }
}

define('quantum-layout', Layout);