import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-tabs/source/main.js';
import '/source/main.js';

const elements = new Set();
const save = () => {
    for (const element of elements) {
        const { width, height } = element.style;
        localStorage.setItem(element.id, JSON.stringify({ width, height }));
    }
};

let timeout = 0;
const resizeObserver = new ResizeObserver(entries => {
    if (timeout) {
        clearTimeout(timeout);
    }

    for (const { target } of entries) {
        if (!elements.has(target)) {
            elements.add(target);
        }
    }

    timeout = setTimeout(save, 1000);
});

const tabs = document.querySelectorAll('quantum-tabs');
for (const tab of tabs) {
    try {
        Object.assign(tab.style, JSON.parse(localStorage.getItem(tab.id)));
    } catch {
    }

    resizeObserver.observe(tab);
}

document.body.style.visibility = 'visible'; 