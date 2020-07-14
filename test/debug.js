const resources = [
    '/source/templates/layout.html'
];

Promise.all(resources.map(resource => fetch(resource).then(response => response.text().then(html => document.body.insertAdjacentHTML('beforeend', html)))));