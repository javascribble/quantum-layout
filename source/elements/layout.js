import { Component, template, define } from '../import.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static get observedAttributes() { return ['stack', 'lock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        //addedElements.forEach(element => element.addEventListener('click', this.#activate));
        //deletedElements.forEach(element => element.removeEventListener('click', this.#activate));
        if (currentElements.length === 0) {
            this.parentElement.removeChild(this);
        }
    }
}

define('quantum-layout', Layout);