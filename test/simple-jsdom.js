'use strict';

var assert = require('assert');
var simpleJsdom = require('../index');
var globals = simpleJsdom.globals;
var install = simpleJsdom.install;

describe('Simple JSDom', function() {
  describe('globals', function() {
    it('should contain `document`', function() {
      assert.ok(globals.document);
    });

    it('should contain `window`', function() {
      assert.ok(globals.window);
    });

    it('should contain `navigator`', function() {
      assert.ok(globals.navigator);
    });

    it('should contain `jsdom`', function() {
      assert.ok(globals.jsdom);
    });

    it('should not set anything on the global scope', function() {
      assert.equal(global.document, undefined);
      assert.equal(global.window, undefined);
      assert.equal(global.navigator, undefined);
      assert.equal(global.jsdom, undefined);
    });
  });

  describe('installs', function() {
    beforeEach(function() {
      install();
    });

    it('should set a `document`', function() {
      assert.ok(global.document);
    });

    it('should set a `window`', function() {
      assert.ok(global.window);
    });

    it('should set a `navigator`', function() {
      assert.ok(global.navigator);
    });

    it('should set a `jsdom`', function() {
      assert.ok(global.jsdom);
    });
  });
});
