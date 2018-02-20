const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const fse = require('fs-extra')

const appName = 'SMT'
const itemJsonPath = path.join(app.getPath('appData'), `${appName}`, 'items.json')


const sampleItems = {
    items: [
        { url: 'http://steamcommunity.com/market/listings/730/Clutch%20Case', buyPrice: 10.2 },
        { url: 'http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29', buyPrice: 10.7 },
        { url: 'http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Frontside%20Misty%20%28Field-Tested%29', buyPrice: 3.50 },
    ]
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let sameWidth = 800
let sameHeight = 600

function createWindow() {
    //Ensure the JSON file exists for the list of items to track
    fse.ensureFileSync(itemJsonPath)
    console.log(fse.statSync(itemJsonPath).blksize)
    if (!fse.statSync(itemJsonPath).blksize) {
        fse.writeJSONSync(itemJsonPath, sampleItems)
    }

    // Create the browser window.
    win = new BrowserWindow({
        minWidth: sameWidth,
        minHeight: sameHeight,
        // maxWidth: sameWidth,
        // maxHeight: sameHeight
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    require('vue-devtools').install()
    // Open the DevTools.
    win.webContents.openDevTools()

    ipcMain.on('fetchItemJson-sync', (event) => {
        fse.readJson(itemJsonPath).then((items) => {
            event.returnValue = items
        })
    })

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.