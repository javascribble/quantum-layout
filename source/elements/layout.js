import { Quantum, define } from '../../references/quantum.js';
import { layout } from '../templates/element.js';

export class Layout extends Quantum {
    constructor() {
        super(layout);
    }
}

define(Layout);