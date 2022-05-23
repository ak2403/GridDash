/* eslint-disable global-require */
try {
  require('electron-reloader')(module);
} catch (err) {
  console.error(err);
}

const { app, BrowserWindow, screen } = require('electron');
const Store = require('electron-store');

const path = require('path');

Store.initRenderer();

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
