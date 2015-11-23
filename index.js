'use strict';

var jsdom = require('jsdom').jsdom;
var document = jsdom('<html><head></head><body></body></html>');
var window = document.defaultView;
var navigator = window.navigator = {
  userAgent: 'NodeJS JSDom',
  appVersion: ''
};

// References to the objects are available under `globals`
exports.globals = {
  jsdom: jsdom,
  document: document,
  window: window,
  navigator: navigator
};

// Run this method to modify the global namespace
exports.install = function() {
  global.jsdom = jsdom;
  global.document = document;
  global.window = window;
  global.navigator = navigator;
};
