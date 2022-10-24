const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
})
contextBridge.exposeInMainWorld('electron', {
    store: {
        get(key) {
            return ipcRenderer.sendSync('electron-store-get', key);
        },
        set(property, val) {
            ipcRenderer.send('electron-store-set', property, val);
        },
        has(key) {
            return ipcRenderer.sendSync('electron-store-has', key);
        },
        // Other method you want to add like has(), reset(), etc.
    },
})

