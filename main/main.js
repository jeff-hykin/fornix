// Modules to control application life and create native browser window
const ezElectron = require("../tools/ezElectron")
const electron = require("electron")

ezElectron.when = {
    shouldLaunch() {
        new ezElectron.BrowserWindow({
            width: 800,
            height: 600,
            loadUsing: `${__dirname}/pages/home.js`,
        })
    },
    lastWindowClosed() {
        electron.app.quit()
    },
}