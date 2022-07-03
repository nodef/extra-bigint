const bigint = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = bigint.isPrime(113n);
  assert.equal(a, true);
  // → true

  var a = bigint.floorDiv(7n, 3n);
  assert.equal(a, 2n);
  // → 2n

  var a = bigint.sqrt(81n);
  assert.equal(a, 9n);
  // → 9n

  var a = bigint.lcm(2n, 3n, 4n);
  assert.equal(a, 12n);
  // → 12n

  var a = bigint.log2(8n);
  assert.equal(a, 3n);
  // → 3n

  var a = bigint.sum(1n, 2n, 3n, 4n);
  assert.equal(a, 10n);
  // → 10n

  var a = bigint.mean(1n, 7n, 8n);
  assert.equal(a, 5n);
  // → 5n
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
