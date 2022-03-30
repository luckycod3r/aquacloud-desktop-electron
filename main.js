
const {app, BrowserWindow, ipcMain, net} = require('electron')
const path = require('path')

ipcMain.handle('login-app', () => {
  console.log("login")
});
ipcMain.handle('quit-app', () => {
  app.quit();
});

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    productName: "AquaCloud",
    frame: false,
    
    contextIsolation: false,
    title: "AquaCloud",
    icon: "images/icon-mac.icns",
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'scripts/node.js')
    }
  })


  mainWindow.loadFile('index.html')
  // Разрешить веб тулс
  mainWindow.webContents.openDevTools()
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {

        
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
