const bit = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = bit.count(7);
  assert.equal(a, 3);
  // → 3 (111 ⇒ 3)

  var a = bit.parity(8, 2);
  assert.equal(a, 2);
  // → 2 (10,00 ⇒ 10)

  var a = bit.swap(6, 1, 0);
  assert.equal(a, 5);
  // → 5 (110 ⇒ 101)

  var a = bit.reverse(0xFFFF0000);
  assert.equal(a, 65535);
  // → 65535 (0x0000FFFF)

  var a = bit.signExtend(15, 4);
  assert.equal(a, -1);
  // → -1
}
example1();
