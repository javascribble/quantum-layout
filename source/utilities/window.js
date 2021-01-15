const openWindow = event => {
    window.addEventListener('message', event => event.source.postMessage('', event.origin), false);
    window.open('/').postMessage(data, '*');
};

const closeWindow = event => {
};

document.addEventListener('dragleave', openWindow);
document.addEventListener('dragenter', closeWindow);