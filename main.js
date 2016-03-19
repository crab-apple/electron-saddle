'use strict';

var appLocation = require('./appLocation.js').appLocation;

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Global reference to window object
var mainWindow = null;

app.on('window-all-closed', function(){
  // Simplified (no OS X)
  app.quit();
});

app.on('ready', function(){

  // Create a window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
    //, webPreferences: {
      //nodeIntegration: false
    //}
  });

  mainWindow.maximize();

  mainWindow.webContents.openDevTools();
  
  mainWindow.loadURL(appLocation);

  mainWindow.on('closed', function(){
    // Dereference
    mainWindow = null;
  });

});


