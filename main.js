
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    productName: "AquaCloud",
    frame: false,
    title: "AquaCloud",
    icon: "images/icon-mac.icns",
    webPreferences: {
      preload: path.join(__dirname, 'scripts/preload.js')
    }
  })


  mainWindow.loadFile('index.html')

  // Разрешить веб тулс
  // mainWindow.webContents.openDevTools()
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
