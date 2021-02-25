import html from '../templates/layout.js';

export class Layout extends Quantum {
    static get observedAttributes() { return ['stack']; }
}

Layout.define('quantum-layout', html);