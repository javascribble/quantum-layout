import html from '../templates/layout.js';

export class Layout extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['stack']; }
}

quantum.define('quantum-layout', Layout);