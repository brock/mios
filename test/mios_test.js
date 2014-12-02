/*global describe,it*/
'use strict';
var assert = require('assert'),
  mios = require('../lib/mios.js');

describe('mios node module.', function() {
  it('must be awesome', function() {
    assert( mios.awesome(), 'awesome');
  });
});
