// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { ipcRenderer, net} = require('electron');
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.app-close').addEventListener('click', () => {
      ipcRenderer.invoke('quit-app');
  });
})
