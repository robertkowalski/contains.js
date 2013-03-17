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
