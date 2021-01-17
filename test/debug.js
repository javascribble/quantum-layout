import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-tabs/source/main.js';
import '/source/main.js';

const key = 'layout';
const layout = document.querySelector('quantum-layout');
if (localStorage.hasOwnProperty(key)) {
    layout.deserialize(JSON.parse(localStorage.getItem(key)));
}

const resizeObserver = new ResizeObserver(entries => {
    for (const { target } of entries) {
        if (target.timeout) {
            clearTimeout(target.timeout);
        }

        target.timeout = setTimeout(() => localStorage.setItem(key, JSON.stringify(target.serialize())), 1000);
    }
});

resizeObserver.observe(layout);

document.body.style.visibility = 'visible'; 