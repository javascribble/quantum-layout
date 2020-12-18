import { Component, template, define, setAttribute } from '../import.js';
import { withinThreshold } from '../utilities/resizing.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    constructor() {
        super();

        // TODO: Add touch controls.
        this.addEventListener('mousemove', this.#resize);
    }

    static template = template(html);

    static get observedAttributes() { return ['stack', 'lock']; }

    defaultSlotChanged(slot, addedElements, deletedElements, currentElements) {
        if (currentElements.length === 0) {
            this.parentElement.removeChild(this);
        }
    }

    #resize(event) {
        const valid = !this.lock && withinThreshold(this, event);
        setAttribute(this, 'resizing', valid);
        if (valid) {
            event.stopPropagation();
            if (event.buttons === 1) {
                const target = event.path.intersection(this.slots.get('')).first;
                const rect = target.getBoundingClientRect();
                const { style } = target;
                // if (this.stack) {
                //     style.height = event.clientY - rect.y + 'px';
                // } else {
                //     style.width = event.clientX - rect.x + 'px';
                // }
            }
        }
    }
}

define('quantum-layout', Layout);