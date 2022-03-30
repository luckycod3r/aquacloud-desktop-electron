const { ipcRenderer, net, shell } = require('electron');
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#close-btn').addEventListener('click', () => {
        ipcRenderer.invoke('quit-app');

    });
    document.querySelector('#hide-btn').addEventListener('click', () => {
        ipcRenderer.invoke('hide-app');
    });
    let links = document.querySelector('.app-link');

    links.addEventListener('click', () => {
        openLink(links.getAttribute("link"));
    });


})

function openLink(link) {
    shell.openExternal(link);
}