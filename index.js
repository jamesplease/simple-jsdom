'use strict';

global.jsdom = require('jsdom').jsdom;

// Set up our document, window, and navigator
global.document = jsdom('<html><head></head><body></body></html>');
global.window = global.document.parentWindow;
global.navigator = window.navigator = {
  userAgent: 'NodeJS JSDom',
  appVersion: ''
};
