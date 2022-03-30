const { app, BrowserWindow, ipcMain, net, shell, Menu, MenuItem } = require('electron')
const path = require('path')
let mainWindow;



function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        productName: "AquaCloud",
        frame: false,
        transparent: true,
        contextIsolation: false,
        title: "AquaCloud",
        icon: "images/win-ico.ico",
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'scripts/node.js')
        }
    })
    const menu = new Menu()
    menu.append(new MenuItem({
        label: 'browsertools',
        submenu: [{
            role: 'help',
            accelerator: process.platform === 'darwin' ? 'Cmd+I' : 'F12',
            click: () => {
                mainWindow.webContents.openDevTools()
            }
        }]
    }))
    Menu.setApplicationMenu(menu)
    mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {


        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})


app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})
ipcMain.handle('quit-app', () => {
    app.quit();
});
ipcMain.handle('hide-app', () => {
    BrowserWindow.getFocusedWindow().minimize();
});