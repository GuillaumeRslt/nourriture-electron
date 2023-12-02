const { app, BrowserWindow } = require('electron')

const url = require('url');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 6700
    });
    win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/nourriture-electron/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
    // win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })