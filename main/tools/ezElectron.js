const electron = require("electron")
const {app, BrowserWindow: ActualBrowserWindow } = require('electron')
const path = require('path')

const when = {
    shouldLaunch: ()=>null,
    appStarts: ()=>null,
    lastWindowClosed: ()=>app.quit(),
    
    // generic ones
    electronIs: {
        windowIsCreated: ()=>null,
        willFinishLaunching: ()=>null,
        ready: ()=>null,
        windowAllClosed: ()=>null,
        beforeQuit: ()=>null,
        willQuit: ()=>null,
        quit: ()=>null,
        browserWindowBlur: ()=>null,
        browserWindowFocus: ()=>null,
        browserWindowCreated: ()=>null,
        webContentsCreated: ()=>null,
        certificateError: ()=>null,
        selectClientCertificate: ()=>null,
        login: ()=>null,
        gpuInfoUpdate: ()=>null,
        renderProcessGone: ()=>null,
        childProcessGone: ()=>null,
        accessibilitySupportChanged: ()=>null,
        sessionCreated: ()=>null,
        secondInstance: ()=>null,
        desktopCapturerGetSources: ()=>null,
        // MacOS only
        openFile: ()=>null,
        openUrl: ()=>null,
        activate: ()=>null,
        didBecomeActive: ()=>null,
        continueActivity: ()=>null,
        willContinueActivity: ()=>null,
        continueActivityError: ()=>null,
        activityWasContinued: ()=>null,
        updateActivityState: ()=>null,
        newWindowForTab: ()=>null,
    }
}

const ezElectron = module.exports = {
    isReady: app.whenReady(),
    BrowserWindow: function(options={}, ...otherArgs) {
        // check loadUsing argument
        if (typeof options.loadUsing != 'string') {
            throw Error(`when calling new BrowserWindow({}), there needs to be a loadUsing argument ex: new BrowserWindow({loadUsing: "./path/to/file.js"}) `)
            // TODO: also make sure the file exists (electron doesn't give good errors)
        }
        const loadUsing = options.loadUsing
        delete options.loadUsing // to make electron happy

        // add some default options
        options.webPreferences = {
            nodeIntegration: true,
            contextIsolation: false,
            ...(options.webPreferences || {})
        }
        const browser = new ActualBrowserWindow(options, ...otherArgs)
        if (loadUsing.match(/\.html$/)) {
            // load the generic html file
            browser.loadFile(loadUsing)
        } else {
            // load the generic html file
            browser.loadFile(path.join(__dirname, "..", "tools", 'index.html'))
            // the html will ask what JS it should load
            electron.ipcMain.once("$whatFile",(event)=>event.returnValue=loadUsing)
        }
        return browser
    },
}

// merge on assignment
Object.defineProperty(ezElectron, "when", {
    set(value) {
        Object.assign(when, value)
    }
})

// connect start
ezElectron.isReady.then(()=>{
    when.appStarts()
    when.shouldLaunch()
})

// connect launch
app.on('activate', async ()=>{
    await ezElectron.isReady
    console.log("howdy")
    if (ActualBrowserWindow.getAllWindows().length === 0) { // mostly only because of MacOS (running with no windows)
        when.shouldLaunch()
    }
})
// connect lastWindowClosed
app.on('window-all-closed', when.lastWindowClosed)



// connect all the generic ones
app.on('window-is-created'            , when.electronIs.windowIsCreated)
app.on('will-finish-launching'        , when.electronIs.willFinishLaunching)
app.on('ready'                        , when.electronIs.ready)
app.on('window-all-closed'            , when.electronIs.windowAllClosed)
app.on('before-quit'                  , when.electronIs.beforeQuit)
app.on('will-quit'                    , when.electronIs.willQuit)
app.on('quit'                         , when.electronIs.quit)
app.on('browser-window-blur'          , when.electronIs.browserWindowBlur)
app.on('browser-window-focus'         , when.electronIs.browserWindowFocus)
app.on('browser-window-created'       , when.electronIs.browserWindowCreated)
app.on('web-contents-created'         , when.electronIs.webContentsCreated)
app.on('certificate-error'            , when.electronIs.certificateError)
app.on('select-client-certificate'    , when.electronIs.selectClientCertificate)
app.on('login'                        , when.electronIs.login)
app.on('gpu-info-update'              , when.electronIs.gpuInfoUpdate)
app.on('render-process-gone'          , when.electronIs.renderProcessGone)
app.on('child-process-gone'           , when.electronIs.childProcessGone)
app.on('accessibility-support-changed', when.electronIs.accessibilitySupportChanged)
app.on('session-created'              , when.electronIs.sessionCreated)
app.on('second-instance'              , when.electronIs.secondInstance)
app.on('desktop-capturer-get-sources' , when.electronIs.desktopCapturerGetSources)
app.on('open-file'                    , when.electronIs.openFile)
app.on('open-url'                     , when.electronIs.openUrl)
app.on('activate'                     , when.electronIs.activate)
app.on('did-become-active'            , when.electronIs.didBecomeActive)
app.on('continue-activity'            , when.electronIs.continueActivity)
app.on('will-continue-activity'       , when.electronIs.willContinueActivity)
app.on('continue-activity-error'      , when.electronIs.continueActivityError)
app.on('activity-was-continued'       , when.electronIs.activityWasContinued)
app.on('update-activity-state'        , when.electronIs.updateActivityState)
app.on('new-window-for-tab'           , when.electronIs.newWindowForTab)