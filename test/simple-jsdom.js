'use strict';

var assert = require('assert');
require('../index');

describe('Simple JSDom', function() {
  it('should set a `document`', function() {
    assert.ok(global.document);
  });

  it('should set a `window`', function() {
    assert.ok(global.window);
  });

  it('should set a `navigator`', function() {
    assert.ok(global.navigator);
  });
});
