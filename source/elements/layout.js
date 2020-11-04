import { Component, template, define } from '../import.js';
import html from '../templates/layout.js';

export class Layout extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static get observedAttributes() { return ['stack']; }
}

define('quantum-layout', Layout);