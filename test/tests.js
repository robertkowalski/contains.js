module('String.prototype.contains', {
  setup: function() {
    // prepare something for all following tests
  },
  teardown: function() {
    // clean up after each test
  }
});


test('String.prototype.contains is a function', function() {
  ok(typeof String.prototype.contains == 'function');
});

test('direct call', function() {
  ok(String.prototype.contains.call('f', 'f') === true);
});

test('is case sensitive', function() {
  ok('foo'.contains('Fo') === false);
});

test('can match several chars', function() {
  ok('foo'.contains('fo') === true);
});

test('empty matches', function() {
  ok('foo'.contains('') === true);
});

test('takes a position #1', function() {
  ok('foo'.contains('f', 0) === true);
});

test('takes a position #2', function() {
  ok('foo'.contains('f', 1) === false);
});

test('takes a position #3', function() {
  ok('foo'.contains('o', 1) === true);
});

test('works with a Number', function() {
  ok('foo3'.contains(3, 1) === true);
});

test('works with String objects with no index', function() {
  var str = new String('foo');
  ok(str.contains('oo') === true);
  ok(str.contains('Fo') === false);
  ok(str == 'foo');
});

test('works with String objects with an index', function() {
  var str = new String('foo');
  ok(str.contains('f', 0) === true);
  ok(str.contains('f', 1) === false);
  ok(str.contains('oo', 1) === true);
  ok(str == 'foo');
});

/* Now some weird type conversion stuff */
test('foo3 contains array', function() {
  ok('foo3'.contains([]) === true);
});

test('foo3 not contains object', function() {
  ok('foo3'.contains({}) === false);
});