import * as vigint from "../src";
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
} from "../src";




test("example1", () => {
  var b = vigint.isPrime(113n);
  expect(b).toBe(true);
  // → true

  var a = vigint.floorDiv(7n, 3n);
  expect(a).toBe(2n);
  // → 2n

  var a = vigint.sqrt(81n);
  expect(a).toBe(9n);
  // → 9n

  var a = vigint.lcm(2n, 3n, 4n);
  expect(a).toBe(12n);
  // → 12n

  var a = vigint.log2(8n);
  expect(a).toBe(3n);
  // → 3n

  var a = vigint.sum(1n, 2n, 3n, 4n);
  expect(a).toBe(10n);
  // → 10n

  var a = vigint.mean(1n, 7n, 8n);
  expect(a).toBe(5n);
  // → 5n
});




test("is", () => {
  var a = is(314n);
  expect(a).toBe(true);
  var a = is(-707n);
  expect(a).toBe(true);
  var a = is("314n");
  expect(a).toBe(false);
  var a = is({"value": 314n});
  expect(a).toBe(false);
  var a = is(null);
  expect(a).toBe(false);
});


test("compare", () => {
  var a = compare(10n, 12n);
  expect(a).toBeLessThan(0);
  var a = compare(12n, 12n);
  expect(a).toBe(0);
  var a = compare(17n, 12n);
  expect(a).toBeGreaterThan(0);
});


test("abs", () => {
  var a = abs(-2n);
  expect(a).toBe(2n);
  var a = abs(0n);
  expect(a).toBe(0n);
  var a = abs(5n);
  expect(a).toBe(5n);
});


test("sign", () => {
  var a = sign(-2n);
  expect(a).toBe(-1n);
  var a = sign(0n);
  expect(a).toBe(0n);
  var a = sign(5n);
  expect(a).toBe(1n);
});


test("floorDiv", () => {
  var a = floorDiv(15n, 4n);
  expect(a).toBe(3n);
  var a = floorDiv(2n, 2n);
  expect(a).toBe(1n);
  var a = floorDiv(-15n, 4n);
  expect(a).toBe(-4n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


test("ceilDiv", () => {
  var a = ceilDiv(15n, 4n);
  expect(a).toBe(4n);
  var a = ceilDiv(2n, 2n);
  expect(a).toBe(1n);
  var a = ceilDiv(-15n, 4n);
  expect(a).toBe(-3n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


test("roundDiv", () => {
  var a = roundDiv(15n, 4n);
  expect(a).toBe(4n);
  var a = roundDiv(2n, 2n);
  expect(a).toBe(1n);
  var a = roundDiv(-15n, 4n);
  expect(a).toBe(-4n);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


test("rem", () => {
  var a = rem(1n, 10n);
  expect(a).toBe(1n);
  var a = rem(-1n, 10n);
  expect(a).toBe(-1n);
  var a = rem(1n, -10n);
  expect(a).toBe(1n);
});


test("mod", () => {
  var a = mod(1n, 10n);
  expect(a).toBe(1n);
  var a = mod(-1n, 10n);
  expect(a).toBe(9n);
  var a = mod(1n, -10n);
  expect(a).toBe(-9n);
});


test("modp", () => {
  var a = modp(1n, 10n);
  expect(a).toBe(1n);
  var a = modp(-1n, 10n);
  expect(a).toBe(9n);
  var a = modp(1n, -10n);
  expect(a).toBe(1n);
});


test("constrain", () => {
  var a = constrain(20n, 0n, 50n);
  expect(a).toBe(20n);
  var a = constrain(-10n, 0n, 100n);
  expect(a).toBe(0n);
  var a = constrain(120n, 0n, 100n);
  expect(a).toBe(100n);
});
// - https://processing.org/reference/norm_.html


test("remap", () => {
  var a = remap(25n, 0n, 100n, 0n, 1366n);
  expect(a).toBe(341n);
  var a = remap(110n, 0n, 100n, -20n, -10n);
  expect(a).toBe(-9n);
});
// - https://processing.org/reference/map_.html


test("lerp", () => {
  var a = lerp(80n, 320n, 0.8);
  expect(a).toBe(272n);
  var a = lerp(80n, 320n, 0.20);
  expect(a).toBe(128n);
  var a = lerp(80n, 320n, 0.32);
  expect(a).toBe(156n);
});
// - https://processing.org/reference/lerp_.html


test("isPow2", () => {
  var a = isPow2(32n);
  expect(a).toBe(true);
  var a = isPow2(1023n);
  expect(a).toBe(false);
});


test("isPow10", () => {
  var a = isPow10(10n);
  expect(a).toBe(true);
  var a = isPow10(999n);
  expect(a).toBe(false);
});


test("prevPow2", () => {
  var a = prevPow2(32n);
  expect(a).toBe(16n);
  var a = prevPow2(1023n);
  expect(a).toBe(512n);
});


test("prevPow10", () => {
  var a = prevPow10(10n);
  expect(a).toBe(1n);
  var a = prevPow10(999n);
  expect(a).toBe(100n);
});


test("nextPow2", () => {
  var a = nextPow2(32n);
  expect(a).toBe(64n);
  var a = nextPow2(1023n);
  expect(a).toBe(1024n);
});


test("nextPow10", () => {
  var a = nextPow10(10n);
  expect(a).toBe(100n);
  var a = nextPow10(999n);
  expect(a).toBe(1000n);
});


test("log2", () => {
  var a = log2(32n);
  expect(a).toBe(5n);
  var a = log2(127n);
  expect(a).toBe(6n);
});


test("log10", () => {
  var a = log10(81n);
  expect(a).toBe(1n);
  var a = log10(999n);
  expect(a).toBe(2n);
});


test("sqrt", () => {
  var a = sqrt(81n);
  expect(a).toBe(9n);
  var a = sqrt(99n);
  expect(a).toBe(9n);
});


test("cbrt", () => {
  var a = cbrt(27n);
  expect(a).toBe(3n);
  var a = cbrt(99n);
  expect(a).toBe(4n);
});


test("root", () => {
  var a = root(25n, 2n);
  expect(a).toBe(5n);
  var a = root(-8n, 3n);
  expect(a).toBe(-2n);
  var a = root(81n, 4n);
  expect(a).toBe(3n);
  var a = root(99n, 4n);
  expect(a).toBe(3n);
});
// - https://en.wikipedia.org/wiki/Nth_root


test("properDivisors", () => {
  var a = properDivisors(6n);
  expect(a).toStrictEqual([1n, 2n, 3n]);
  var a = properDivisors(1n);
  expect(a).toStrictEqual([]);
  var a = properDivisors(0n);
  expect(a).toStrictEqual([]);
  var a = properDivisors(-24n);
  expect(a).toStrictEqual([1n, 2n, 3n, 4n, 6n, 8n, 12n]);
});


test("aliquotSum", () => {
  var a = aliquotSum(6n);
  expect(a).toBe(6n);  // (1+2+3)
  var a = aliquotSum(1n);
  expect(a).toBe(0n);
  var a = aliquotSum(0n);
  expect(a).toBe(0n);
  var a = aliquotSum(-24n);
  expect(a).toBe(36n);  // (1+2+3+4+6+8+12)
});


test("minPrimeFactor", () => {
  var a = minPrimeFactor(1n);
  expect(a).toBe(0n);
  var a = minPrimeFactor(3n);
  expect(a).toBe(3n);
  var a = minPrimeFactor(21n);
  expect(a).toBe(3n);
  var a = minPrimeFactor(55n);
  expect(a).toBe(5n);
  var a = minPrimeFactor(53n);
  expect(a).toBe(53n);
});


test("isPrime", () => {
  var a = isPrime(7n);
  expect(a).toBe(true);
  var a = isPrime(53n);
  expect(a).toBe(true);
  var a = isPrime(4n);
  expect(a).toBe(false);
  var a = isPrime(1n);
  expect(a).toBe(false);
  var a = isPrime(0n);
  expect(a).toBe(false);
});


test("gcd", () => {
  var a = gcd(6n, 15n);
  expect(a).toBe(3n);
  var a = gcd(6n, 15n, 21n);
  expect(a).toBe(3n);
  var a = gcd(6n, 15n, 20n);
  expect(a).toBe(1n);
  var a = gcd();  // sp
  expect(a).toBe(1n);  // sp
});


test("lcm", () => {
  var a = lcm(2n, 3n);
  expect(a).toBe(6n);
  var a = lcm(2n, 3n, 4n);
  expect(a).toBe(12n);
  var a = lcm(2n, 3n, 4n, 5n);
  expect(a).toBe(60n);
  var a = lcm();  // sp
  expect(a).toBe(1n);  // sp
});


test("factorial", () => {
  var a = factorial(5n);
  expect(a).toBe(120n);
  var a = factorial(6n);
  expect(a).toBe(720n);
  var a = factorial(7n);
  expect(a).toBe(5040n);
  var a = factorial(-1n);  // sp
  expect(a).toBe(0n);  // sp
});
// - https://en.wikipedia.org/wiki/Factorial


test("binomial", () => {
  var a = binomial(4n, 1n);
  expect(a).toBe(4n);
  var a = binomial(4n, 2n);
  expect(a).toBe(6n);
  var a = binomial(4n, 3n);
  expect(a).toBe(4n);
  var a = binomial(4n, -1n);  // sp
  expect(a).toBe(0n);  // sp
  var a = binomial(-4n, 1n);  // sp
  expect(a).toBe(-4n);  // sp
});


test("multinomial", () => {
  var a = multinomial(1n, 2n);
  expect(a).toBe(3n);
  var a = multinomial(1n, 2n, 3n);
  expect(a).toBe(60n);
  var a = multinomial(1n, 2n, 3n, 4n);
  expect(a).toBe(12600n);
});


test("hypot", () => {
  var a = hypot(3n, 4n);
  expect(a).toBe(5n);
  var a = hypot(8n, 15n);
  expect(a).toBe(17n);
  var a = hypot(6n, 8n);
  expect(a).toBe(10n);
});


test("sum", () => {
  var a = sum(1n, 2n);
  expect(a).toBe(3n);
  var a = sum(1n, 2n, 3n);
  expect(a).toBe(6n);
  var a = sum(1n, 2n, 3n, 4n);
  expect(a).toBe(10n);
});


test("product", () => {
  var a = product(1n, 2n);
  expect(a).toBe(2n);
  var a = product(1n, 2n, 3n);
  expect(a).toBe(6n);
  var a = product(1n, 2n, 3n, 4n);
  expect(a).toBe(24n);
});


test("median", () => {
  var a = median(1n, 7n);
  expect(a).toBe(4n);
  var a = median(1n, 7n, 8n);
  expect(a).toBe(7n);
  var a = median(1n, 7n, 8n, 10n);
  expect(a).toBe(7n);
});


test("modes", () => {
  var a = modes(1n, 2n);
  expect(a).toStrictEqual([1n, 2n]);
  var a = modes(1n, 2n, 2n);
  expect(a).toStrictEqual([2n]);
  var a = modes(1n, 2n, 2n, 3n, 3n);
  expect(a).toStrictEqual([2n, 3n]);
});


test("min", () => {
  var a = min(1n, 7n);
  expect(a).toBe(1n);
  var a = min(8n, 7n, 6n);
  expect(a).toBe(6n);
  var a = min(7n, 8n, 6n);
  expect(a).toBe(6n);
});


test("max", () => {
  var a = max(1n, 7n);
  expect(a).toBe(7n);
  var a = max(8n, 7n, 6n);
  expect(a).toBe(8n);
  var a = max(7n, 8n, 6n);
  expect(a).toBe(8n);
});


test("range", () => {
  var a = range(1n, 7n);
  expect(a).toStrictEqual([1n, 7n]);
  var a = range(1n, 7n, 6n);
  expect(a).toStrictEqual([1n, 7n]);
  var a = range(1n, 7n, 8n, 6n);
  expect(a).toStrictEqual([1n, 8n]);
});


test("variance", () => {
  var a = variance(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(0.25)));
  var a = variance(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(0.6666666666666666)));
  var a = variance(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(1.25)));
});


test("arithmeticMean", () => {
  var a = arithmeticMean(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(1.5)));
  var a = arithmeticMean(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(2)));
  var a = arithmeticMean(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(2.5)));
});


test("geometricMean", () => {
  var a = geometricMean(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(Math.sqrt(2))));
  var a = geometricMean(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(Math.cbrt(6))));
  var a = geometricMean(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(Math.pow(24, 1/4))));
});


test("harmonicMean", () => {
  var a = harmonicMean(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(4/3)));
  var a = harmonicMean(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(18/11)));
  var a = harmonicMean(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(48/25)));
});


test("quadriaticMean", () => {
  var a = quadriaticMean(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(Math.sqrt(5/2))));
  var a = quadriaticMean(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(Math.sqrt(14/3))));
  var a = quadriaticMean(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(Math.sqrt(30/4))));
});


test("cubicMean", () => {
  var a = cubicMean(1n, 2n);
  expect(a).toBe(BigInt(Math.floor(Math.cbrt(9/2))));
  var a = cubicMean(1n, 2n, 3n);
  expect(a).toBe(BigInt(Math.floor(Math.cbrt(36/3))));
  var a = cubicMean(1n, 2n, 3n, 4n);
  expect(a).toBe(BigInt(Math.floor(Math.cbrt(100/4))));
});
