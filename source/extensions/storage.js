import { Layout } from '../elements/layout.js';

Layout.prototype.save = function () {
    for (const element of this.slots.get('')) {
        const { width, height } = element.style;
        localStorage.setItem(element.id, JSON.stringify({ width, height }));
    }
};

Layout.prototype.load = function () {
    for (const element of this.slots.get('')) {
        Object.assign(element.style, JSON.parse(localStorage.getItem(element.id)));
    }
};