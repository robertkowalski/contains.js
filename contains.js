/*!
es-6-contains-polyfill - v1.0.0 - 2013-03-17
* https://github.com/robertkowalski/es-6-contains-polyfill
* Copyright (c) 2013 Robert Kowalski; Licensed MIT */
;(function() {
  'use strict';

  if (typeof String.prototype.contains == 'function') {
    return;
  }

  String.prototype.contains = function(value, pos) {
    var string = this;
    if (pos) {
      string = string.slice(pos, -1);
    }
    return string.indexOf(value) !== -1;
  };


})();
