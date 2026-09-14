import {assertEquals} from "@std/assert";
import * as xbigint from "./index.ts";
import {
  is,
  compare,
  abs,
  sign,
  floorDiv,
  ceilDiv,
  roundDiv,
  rem,
  mod,
  modp,
  constrain,
  remap,
  lerp,
  isPow2,
  isPow10,
  prevPow2,
  prevPow10,
  nextPow2,
  nextPow10,
  log2,
  log10,
  sqrt,
  cbrt,
  root,
  properDivisors,
  aliquotSum,
  minPrimeFactor,
  maxPrimeFactor,
  primeFactors,
  primeExponentials,
  isPrime,
  gcd,
  lcm,
  factorial,
  binomial,
  multinomial,
  hypot,
  sum,
  product,
  median,
  modes,
  min,
  max,
  range,
  variance,
  arithmeticMean,
  geometricMean,
  harmonicMean,
  quadriaticMean,
  cubicMean,
} from "./index.ts";




Deno.test("example1", () => {
  const b = xbigint.isPrime(113n);
  assertEquals(b, true);
  // → true

  let a;
  a = xbigint.floorDiv(7n, 3n);
  assertEquals(a, 2n);
  // → 2n

  a = xbigint.sqrt(81n);
  assertEquals(a, 9n);
  // → 9n

  a = xbigint.lcm(2n, 3n, 4n);
  assertEquals(a, 12n);
  // → 12n

  a = xbigint.log2(8n);
  assertEquals(a, 3n);
  // → 3n

  a = xbigint.sum(1n, 2n, 3n, 4n);
  assertEquals(a, 10n);
  // → 10n

  a = xbigint.mean(1n, 7n, 8n);
  assertEquals(a, 5n);
  // → 5n
});




// ABOUT
// -----

Deno.test("is", () => {
  let a;
  a = is(314n);
  assertEquals(a, true);
  a = is(-707n);
  assertEquals(a, true);
  a = is("314n");
  assertEquals(a, false);
  a = is({"value": 314n});
  assertEquals(a, false);
  a = is(null);
  assertEquals(a, false);
});




// COMPARE
// -------

Deno.test("compare", () => {
  let a;
  a = compare(10n, 12n);
  assertEquals(a, -2);
  a = compare(12n, 12n);
  assertEquals(a, 0);
  a = compare(17n, 12n);
  assertEquals(a, 5);
});




// SIGN
// ----

Deno.test("abs", () => {
  let a;
  a = abs(-2n);
  assertEquals(a, 2n);
  a = abs(0n);
  assertEquals(a, 0n);
  a = abs(5n);
  assertEquals(a, 5n);
});


Deno.test("sign", () => {
  let a;
  a = sign(-2n);
  assertEquals(a, -1n);
  a = sign(0n);
  assertEquals(a, 0n);
  a = sign(5n);
  assertEquals(a, 1n);
});




// ROUNDED DIVISION
// ----------------

Deno.test("floorDiv", () => {
  let a;
  a = floorDiv(15n, 4n);
  assertEquals(a, 3n);
  a = floorDiv(2n, 2n);
  assertEquals(a, 1n);
  a = floorDiv(-15n, 4n);
  assertEquals(a, -4n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


Deno.test("ceilDiv", () => {
  let a;
  a = ceilDiv(15n, 4n);
  assertEquals(a, 4n);
  a = ceilDiv(2n, 2n);
  assertEquals(a, 1n);
  a = ceilDiv(-15n, 4n);
  assertEquals(a, -3n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


Deno.test("roundDiv", () => {
  let a;
  a = roundDiv(15n, 4n);
  assertEquals(a, 4n);
  a = roundDiv(2n, 2n);
  assertEquals(a, 1n);
  a = roundDiv(-15n, 4n);
  assertEquals(a, -4n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/




// MODULO
// ------

Deno.test("rem", () => {
  let a;
  a = rem(1n, 10n);
  assertEquals(a, 1n);
  a = rem(-1n, 10n);
  assertEquals(a, -1n);
  a = rem(1n, -10n);
  assertEquals(a, 1n);
});


Deno.test("mod", () => {
  let a;
  a = mod(1n, 10n);
  assertEquals(a, 1n);
  a = mod(-1n, 10n);
  assertEquals(a, 9n);
  a = mod(1n, -10n);
  assertEquals(a, -9n);
});


Deno.test("modp", () => {
  let a;
  a = modp(1n, 10n);
  assertEquals(a, 1n);
  a = modp(-1n, 10n);
  assertEquals(a, 9n);
  a = modp(1n, -10n);
  assertEquals(a, 1n);
});




// RANGE CONTROL
// -------------

Deno.test("constrain", () => {
  let a;
  a = constrain(20n, 0n, 50n);
  assertEquals(a, 20n);
  a = constrain(-10n, 0n, 100n);
  assertEquals(a, 0n);
  a = constrain(120n, 0n, 100n);
  assertEquals(a, 100n);
});
// - https://processing.org/reference/norm_.html


Deno.test("remap", () => {
  let a;
  a = remap(25n, 0n, 100n, 0n, 1366n);
  assertEquals(a, 341n);
  a = remap(110n, 0n, 100n, -20n, -10n);
  assertEquals(a, -9n);
});
// - https://processing.org/reference/map_.html


Deno.test("lerp", () => {
  let a;
  a = lerp(80n, 320n, 0.8);
  assertEquals(a, 272n);
  a = lerp(80n, 320n, 0.20);
  assertEquals(a, 128n);
  a = lerp(80n, 320n, 0.32);
  assertEquals(a, 156n);
});
// - https://processing.org/reference/lerp_.html




// POWER / LOGARITHM
// -----------------

Deno.test("isPow2", () => {
  let a;
  a = isPow2(32n);
  assertEquals(a, true);
  a = isPow2(1023n);
  assertEquals(a, false);
});


Deno.test("isPow10", () => {
  let a;
  a = isPow10(10n);
  assertEquals(a, true);
  a = isPow10(999n);
  assertEquals(a, false);
});


Deno.test("prevPow2", () => {
  let a;
  a = prevPow2(32n);
  assertEquals(a, 32n);
  a = prevPow2(1023n);
  assertEquals(a, 512n);
});


Deno.test("prevPow10", () => {
  let a;
  a = prevPow10(10n);
  assertEquals(a, 10n);
  a = prevPow10(999n);
  assertEquals(a, 100n);
});


Deno.test("nextPow2", () => {
  let a;
  a = nextPow2(32n);
  assertEquals(a, 32n);
  a = nextPow2(1023n);
  assertEquals(a, 1024n);
});


Deno.test("nextPow10", () => {
  let a;
  a = nextPow10(10n);
  assertEquals(a, 10n);
  a = nextPow10(999n);
  assertEquals(a, 1000n);
});


Deno.test("log2", () => {
  let a;
  a = log2(32n);
  assertEquals(a, 5n);
  a = log2(127n);
  assertEquals(a, 6n);
});


Deno.test("log10", () => {
  let a;
  a = log10(81n);
  assertEquals(a, 1n);
  a = log10(999n);
  assertEquals(a, 2n);
});




// ROOT
// ----

Deno.test("sqrt", () => {
  let a;
  a = sqrt(81n);
  assertEquals(a, 9n);
  a = sqrt(99n);
  assertEquals(a, 9n);
});


Deno.test("cbrt", () => {
  let a;
  a = cbrt(27n);
  assertEquals(a, 3n);
  a = cbrt(99n);
  assertEquals(a, 4n);
});


Deno.test("root", () => {
  let a;
  a = root(25n, 2n);
  assertEquals(a, 5n);
  a = root(-8n, 3n);
  assertEquals(a, -2n);
  a = root(81n, 4n);
  assertEquals(a, 3n);
  a = root(99n, 4n);
  assertEquals(a, 3n);
});
// - https://en.wikipedia.org/wiki/Nth_root




// DIVISORS
// --------

Deno.test("properDivisors", () => {
  let a;
  a = properDivisors(6n);
  assertEquals(a, [1n, 2n, 3n]);
  a = properDivisors(1n);
  assertEquals(a, []);
  a = properDivisors(0n);
  assertEquals(a, []);
  a = properDivisors(-24n);
  assertEquals(a, [1n, 2n, 3n, 4n, 6n, 8n, 12n]);
});


Deno.test("aliquotSum", () => {
  let a;
  a = aliquotSum(6n);
  assertEquals(a, 6n);  // (1+2+3)
  a = aliquotSum(1n);
  assertEquals(a, 0n);
  a = aliquotSum(0n);
  assertEquals(a, 0n);
  a = aliquotSum(-24n);
  assertEquals(a, 36n);  // (1+2+3+4+6+8+12)
});


Deno.test("minPrimeFactor", () => {
  let a;
  a = minPrimeFactor(1n);
  assertEquals(a, 0n);
  a = minPrimeFactor(3n);
  assertEquals(a, 3n);
  a = minPrimeFactor(21n);
  assertEquals(a, 3n);
  a = minPrimeFactor(55n);
  assertEquals(a, 5n);
  a = minPrimeFactor(53n);
  assertEquals(a, 53n);
});


Deno.test("maxPrimeFactor", () => {
  let a;
  a = maxPrimeFactor(1n);
  assertEquals(a, 0n);
  a = maxPrimeFactor(3n);
  assertEquals(a, 3n);
  a = maxPrimeFactor(21n);
  assertEquals(a, 7n);
  a = maxPrimeFactor(55n);
  assertEquals(a, 11n);
  a = maxPrimeFactor(53n);
  assertEquals(a, 53n);
});


Deno.test("primeFactors", () => {
  let a;
  a = primeFactors(1n);
  assertEquals(a, []);
  a = primeFactors(3n);
  assertEquals(a, [3n]);
  a = primeFactors(21n);
  assertEquals(a, [3n, 7n]);
  a = primeFactors(55n);
  assertEquals(a, [5n, 11n]);
  a = primeFactors(53n);
  assertEquals(a, [53n]);
});


Deno.test("primeExponentials", () => {
  let a;
  a = primeExponentials(1n);
  assertEquals(a, []);
  a = primeExponentials(9n);
  assertEquals(a, [[3n, 2n]]);
  a = primeExponentials(63n);
  assertEquals(a, [[3n, 2n], [7n, 1n]]);
  a = primeExponentials(605n);
  assertEquals(a, [[5n, 1n], [11n, 2n]]);
  a = primeExponentials(53n);
  assertEquals(a, [[53n, 1n]]);
});


Deno.test("isPrime", () => {
  let a;
  a = isPrime(7n);
  assertEquals(a, true);
  a = isPrime(53n);
  assertEquals(a, true);
  a = isPrime(4n);
  assertEquals(a, false);
  a = isPrime(1n);
  assertEquals(a, false);
  a = isPrime(0n);
  assertEquals(a, false);
});


Deno.test("gcd", () => {
  let a;
  a = gcd(6n, 15n);
  assertEquals(a, 3n);
  a = gcd(6n, 15n, 21n);
  assertEquals(a, 3n);
  a = gcd(6n, 15n, 20n);
  assertEquals(a, 1n);
  a = gcd();  // sp
  assertEquals(a, 1n);  // sp
});


Deno.test("lcm", () => {
  let a;
  a = lcm(2n, 3n);
  assertEquals(a, 6n);
  a = lcm(2n, 3n, 4n);
  assertEquals(a, 12n);
  a = lcm(2n, 3n, 4n, 5n);
  assertEquals(a, 60n);
  a = lcm();  // sp
  assertEquals(a, 1n);  // sp
});




// ARRANGEMENTS
// ------------

Deno.test("factorial", () => {
  let a;
  a = factorial(5n);
  assertEquals(a, 120n);
  a = factorial(6n);
  assertEquals(a, 720n);
  a = factorial(7n);
  assertEquals(a, 5040n);
  a = factorial(-1n);  // sp
  assertEquals(a, 0n);  // sp
});
// - https://en.wikipedia.org/wiki/Factorial


Deno.test("binomial", () => {
  let a;
  a = binomial(4n, 1n);
  assertEquals(a, 4n);
  a = binomial(4n, 2n);
  assertEquals(a, 6n);
  a = binomial(4n, 3n);
  assertEquals(a, 4n);
  a = binomial(4n, -1n);  // sp
  assertEquals(a, 0n);  // sp
  a = binomial(-4n, 1n);  // sp
  assertEquals(a, -4n);  // sp
});


Deno.test("multinomial", () => {
  let a;
  a = multinomial(1n, 2n);
  assertEquals(a, 3n);
  a = multinomial(1n, 2n, 3n);
  assertEquals(a, 60n);
  a = multinomial(1n, 2n, 3n, 4n);
  assertEquals(a, 12600n);
});




// GEOMETRY
// --------

Deno.test("hypot", () => {
  let a;
  a = hypot(3n, 4n);
  assertEquals(a, 5n);
  a = hypot(8n, 15n);
  assertEquals(a, 17n);
  a = hypot(6n, 8n);
  assertEquals(a, 10n);
});




// STATISTICS
// ----------

Deno.test("sum", () => {
  let a;
  a = sum(1n, 2n);
  assertEquals(a, 3n);
  a = sum(1n, 2n, 3n);
  assertEquals(a, 6n);
  a = sum(1n, 2n, 3n, 4n);
  assertEquals(a, 10n);
});


Deno.test("product", () => {
  let a;
  a = product(1n, 2n);
  assertEquals(a, 2n);
  a = product(1n, 2n, 3n);
  assertEquals(a, 6n);
  a = product(1n, 2n, 3n, 4n);
  assertEquals(a, 24n);
});


Deno.test("median", () => {
  let a;
  a = median(1n, 7n);
  assertEquals(a, 4n);
  a = median(1n, 7n, 8n);
  assertEquals(a, 7n);
  a = median(1n, 7n, 8n, 10n);
  assertEquals(a, 7n);
});


Deno.test("modes", () => {
  let a;
  a = modes(1n, 2n);
  assertEquals(a, [1n, 2n]);
  a = modes(1n, 2n, 2n);
  assertEquals(a, [2n]);
  a = modes(1n, 2n, 2n, 3n, 3n);
  assertEquals(a, [2n, 3n]);
});


Deno.test("min", () => {
  let a;
  a = min(1n, 7n);
  assertEquals(a, 1n);
  a = min(8n, 7n, 6n);
  assertEquals(a, 6n);
  a = min(7n, 8n, 6n);
  assertEquals(a, 6n);
});


Deno.test("max", () => {
  let a;
  a = max(1n, 7n);
  assertEquals(a, 7n);
  a = max(8n, 7n, 6n);
  assertEquals(a, 8n);
  a = max(7n, 8n, 6n);
  assertEquals(a, 8n);
});


Deno.test("range", () => {
  let a;
  a = range(1n, 7n);
  assertEquals(a, [1n, 7n]);
  a = range(1n, 7n, 6n);
  assertEquals(a, [1n, 7n]);
  a = range(1n, 7n, 8n, 6n);
  assertEquals(a, [1n, 8n]);
});


Deno.test("variance", () => {
  let a;
  a = variance(1n, 2n);
  assertEquals(a, BigInt(Math.floor(0.25)));
  a = variance(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(0.6666666666666666)));
  a = variance(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(1.25)));
});




// MEAN (STATISTICS)
// -----------------

Deno.test("arithmeticMean", () => {
  let a;
  a = arithmeticMean(1n, 2n);
  assertEquals(a, BigInt(Math.floor(1.5)));
  a = arithmeticMean(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(2)));
  a = arithmeticMean(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(2.5)));
});


Deno.test("geometricMean", () => {
  let a;
  a = geometricMean(1n, 2n);
  assertEquals(a, BigInt(Math.floor(Math.sqrt(2))));
  a = geometricMean(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(Math.cbrt(6))));
  a = geometricMean(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(Math.pow(24, 1/4))));
});


Deno.test("harmonicMean", () => {
  let a;
  a = harmonicMean(1n, 2n);
  assertEquals(a, BigInt(Math.floor(4/3)));
  a = harmonicMean(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(18/11)));
  a = harmonicMean(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(48/25)));
});


Deno.test("quadriaticMean", () => {
  let a;
  a = quadriaticMean(1n, 2n);
  assertEquals(a, BigInt(Math.floor(Math.sqrt(5/2))));
  a = quadriaticMean(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(Math.sqrt(14/3))));
  a = quadriaticMean(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(Math.sqrt(30/4))));
});


Deno.test("cubicMean", () => {
  let a;
  a = cubicMean(1n, 2n);
  assertEquals(a, BigInt(Math.floor(Math.cbrt(9/2))));
  a = cubicMean(1n, 2n, 3n);
  assertEquals(a, BigInt(Math.floor(Math.cbrt(36/3))));
  a = cubicMean(1n, 2n, 3n, 4n);
  assertEquals(a, BigInt(Math.floor(Math.cbrt(100/4))));
});
