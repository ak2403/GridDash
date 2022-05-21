const Store = require('./api/store');

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  store: Store,
});
