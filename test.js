const bigint = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = bigint.floorDiv(7n, 3n);
  assert.equal(a, 2n);
  // → 2n
}
example1();


// Test floorDiv().
function testFloorDiv() {
  var a = bigint.floorDiv(7n, 3n);
  assert.equal(a, 2n);
  var a = bigint.floorDiv(-7n, 3n);
  assert.equal(a, -3n);
  var a = bigint.floorDiv(7n, -3n);
  assert.equal(a, -3n);
  var a = bigint.floorDiv(-7n, -3n);
  assert.equal(a, 2n);
}
testFloorDiv();


// Test sqrt().
function testSqrt() {
  var a = bigint.sqrt(81n);
  assert.equal(a, 9n);
  var a = bigint.sqrt(99n);
  assert.equal(a, 9n);
}
testSqrt();


// Test root().
function testRoot() {
  var a = bigint.root(81n, 4n);
  assert.equal(a, 3n);
  var a = bigint.root(99n, 4n);
  assert.equal(a, 3n);
}
testRoot();
