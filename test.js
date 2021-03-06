/* jshint browser: true */

require('./dist/location-origin.js');
var test = require('tape');

test('window.location.origin', function(t) {
  'use strict';

  t.plan(1);

  var port = '';
  if (window.location.port) {
    port = ':' + window.location.port;
  }

  var expected = window.location.protocol + '//' +
                 window.location.hostname +
                 port;

  t.equal(
    location.origin,
    expected,
    'should returns protocol, hostname and port number.'
  );
});
