import { Component, template, define } from '../import.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    static template = template(html);

    static get observedAttributes() { return ['stack', 'lock']; }

    defaultSlotChanged(slot, addedElements, deletedElements, currentElements) {
        if (currentElements.length === 0) {
            this.remove();
        }
    }
}

define('quantum-layout', Layout);