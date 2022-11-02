A collection of functions for working with BigInts.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bigint),
🌐 [Web](https://www.npmjs.com/package/extra-bigint.web),
📜 [Files](https://unpkg.com/extra-bigint/),
📰 [Docs](https://nodef.github.io/extra-bigint/),
📘 [Wiki](https://github.com/nodef/extra-bigint/wiki/).

A [BigInt] can represent whole numbers larger than 2⁵³ - 1 [(1)]. *ES2020*
introduced it as a built-in object. `BigInt` enables us to represent integers
with arbitrary precision, allowing us to perform mathematical operations on
large integers [(2)]. This package includes common bigint functions related to
querying **about** numbers, **comparing** numbers, performing **rounded
division**, performing **modulo** operations, **controlling range** of numbers,
performing **arithmetic** operations, obtaining **divisors** of a number (and
related operations), getting the number of possible **arrangements** of a set of
objects, performing **geometry**-related calculations, performing basic
**statistical** analysis, and finding various **statistical means**.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_bigint` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[(1)]: https://www.geeksforgeeks.org/bigint-in-javascript/
[(2)]: https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bigint.web/index.js

<br>

```javascript
const bigint = require('extra-bigint');
// import * as bigint from "extra-bigint";
// import * as bigint from "https://unpkg.com/extra-bigint/index.mjs"; (deno)

bigint.isPrime(113n);
// → true

bigint.floorDiv(7n, 3n);
// → 2n

bigint.sqrt(81n);
// → 9n

bigint.lcm(2n, 3n, 4n);
// → 12n

bigint.log2(8n);
// → 3n

bigint.sum(1n, 2n, 3n, 4n);
// → 10n

bigint.mean(1n, 7n, 8n);
// → 5n
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is a bigint. |
|  |  |
| [compare] | Compare two bigints. |
|  |  |
| [abs] | Get the absolute of a bigint. |
| [sign] | Get the sign of a bigint. |
|  |  |
| [floorDiv] | Perform floor-divison of two bigints (\\). |
| [ceilDiv] | Perform ceiling-divison of two bigints. |
| [roundDiv] | Perform rounded-divison of two bigints. |
|  |  |
| [rem] | Find the remainder of x/y with sign of x (truncated division). |
| [mod] | Find the remainder of x/y with sign of y (floored division). |
| [modp] | Find the remainder of x/y with +ve sign (euclidean division). |
|  |  |
| [constrain] | Constrain a bigint within a minimum and a maximum value. |
| [remap] | Re-map a bigint from one range to another. |
| [lerp] | Linearly interpolate a bigint between two bigints. |
|  |  |
| [isPow2] | Check if bigint is a power-of-2. |
| [isPow10] | Check if bigint is a power-of-10. |
| [prevPow2] | Find previous power-of-2 of a bigint. |
| [prevPow10] | Find previous power-of-10 of a bigint. |
| [nextPow2] | Find next power-of-2 of a bigint. |
| [nextPow10] | Find next power-of-10 of a bigint. |
| [log2] | Find the base-2 logarithm of a bigint. |
| [log10] | Find the base-10 logarithm of a bigint. |
|  |  |
| [sqrt] | Find the square root of a bigint. |
| [cbrt] | Find the cube root of a bigint. |
| [root] | Find the nth root of a bigint. |
|  |  |
| [properDivisors] | List all divisors of a bigint, except itself. |
| [aliquotSum] | Sum all proper divisors of a bigint. |
| [minPrimeFactor] | Find the least prime number which divides a bigint. |
| [maxPrimeFactor] | Find the greatest prime number which divides a bigint. |
| [primeFactors] | Find the prime factors of a bigint. |
| [primeExponentials] | Find the prime factors and respective exponents of a bigint. |
| [isPrime] | Check if bigint is prime. |
| [gcd] | Find the greatest common divisor of bigints. |
| [lcm] | Find the least common multiple of bigints. |
|  |  |
| [factorial] | Find the factorial of a bigint. |
| [binomial] | Find the number of ways to choose k elements from a set of n elements. |
| [multinomial] | Find the number of ways to put n objects in m bins (n=sum(kᵢ)). |
|  |  |
| [hypot] | Find the length of hypotenuse. |
|  |  |
| [sum] | Find the sum of bigints (Σ). |
| [product] | Find the product of bigints (∏). |
| [median] | Find the value separating the higher and lower halves of bigints. |
| [modes] | Find the values that appear most often. |
| [min] | Find the smallest bigint. |
| [max] | Find the largest bigint. |
| [range] | Find the minimum and maximum bigint. |
| [variance] | Find the mean of squared deviation of bigints from its mean. |
|  |  |
| [arithmeticMean] | Find the arithmetic mean of bigints (µ). |
| [geometricMean] | Find the geometric mean of bigints. |
| [harmonicMean] | Find the harmonic mean of bigints. |
| [quadriaticMean] | Find the quadriatic mean of bigints. |
| [cubicMean] | Find the cubic mean of bigints. |

<br>
<br>


[![](https://img.youtube.com/vi/RJS3Z2DYEO4/maxresdefault.jpg)](https://www.youtube.com/watch?v=RJS3Z2DYEO4)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/274701321.svg)](https://zenodo.org/badge/latestdoi/274701321)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-bigint/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-bigint?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7efb0a005561ff8b1df7/test_coverage)](https://codeclimate.com/github/nodef/extra-bigint/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/7efb0a005561ff8b1df7/maintainability)](https://codeclimate.com/github/nodef/extra-bigint/maintainability)


[is]: https://nodef.github.io/extra-bigint/functions/is.html
[compare]: https://nodef.github.io/extra-bigint/functions/compare.html
[abs]: https://nodef.github.io/extra-bigint/functions/abs.html
[sign]: https://nodef.github.io/extra-bigint/functions/sign.html
[floorDiv]: https://nodef.github.io/extra-bigint/functions/floorDiv.html
[ceilDiv]: https://nodef.github.io/extra-bigint/functions/ceilDiv.html
[roundDiv]: https://nodef.github.io/extra-bigint/functions/roundDiv.html
[rem]: https://nodef.github.io/extra-bigint/functions/rem.html
[mod]: https://nodef.github.io/extra-bigint/functions/mod.html
[modp]: https://nodef.github.io/extra-bigint/functions/modp.html
[constrain]: https://nodef.github.io/extra-bigint/functions/constrain.html
[remap]: https://nodef.github.io/extra-bigint/functions/remap.html
[lerp]: https://nodef.github.io/extra-bigint/functions/lerp.html
[isPow2]: https://nodef.github.io/extra-bigint/functions/isPow2.html
[isPow10]: https://nodef.github.io/extra-bigint/functions/isPow10.html
[prevPow2]: https://nodef.github.io/extra-bigint/functions/prevPow2.html
[prevPow10]: https://nodef.github.io/extra-bigint/functions/prevPow10.html
[nextPow2]: https://nodef.github.io/extra-bigint/functions/nextPow2.html
[nextPow10]: https://nodef.github.io/extra-bigint/functions/nextPow10.html
[log2]: https://nodef.github.io/extra-bigint/functions/log2.html
[log10]: https://nodef.github.io/extra-bigint/functions/log10.html
[sqrt]: https://nodef.github.io/extra-bigint/functions/sqrt.html
[cbrt]: https://nodef.github.io/extra-bigint/functions/cbrt.html
[root]: https://nodef.github.io/extra-bigint/functions/root.html
[properDivisors]: https://nodef.github.io/extra-bigint/functions/properDivisors.html
[aliquotSum]: https://nodef.github.io/extra-bigint/functions/aliquotSum.html
[minPrimeFactor]: https://nodef.github.io/extra-bigint/functions/minPrimeFactor.html
[maxPrimeFactor]: https://nodef.github.io/extra-bigint/functions/maxPrimeFactor.html
[primeFactors]: https://nodef.github.io/extra-bigint/functions/primeFactors.html
[primeExponentials]: https://nodef.github.io/extra-bigint/functions/primeExponentials.html
[isPrime]: https://nodef.github.io/extra-bigint/functions/isPrime.html
[gcd]: https://nodef.github.io/extra-bigint/functions/gcd.html
[lcm]: https://nodef.github.io/extra-bigint/functions/lcm.html
[factorial]: https://nodef.github.io/extra-bigint/functions/factorial.html
[binomial]: https://nodef.github.io/extra-bigint/functions/binomial.html
[multinomial]: https://nodef.github.io/extra-bigint/functions/multinomial.html
[hypot]: https://nodef.github.io/extra-bigint/functions/hypot.html
[sum]: https://nodef.github.io/extra-bigint/functions/sum.html
[product]: https://nodef.github.io/extra-bigint/functions/product.html
[median]: https://nodef.github.io/extra-bigint/functions/median.html
[modes]: https://nodef.github.io/extra-bigint/functions/modes.html
[min]: https://nodef.github.io/extra-bigint/functions/min.html
[max]: https://nodef.github.io/extra-bigint/functions/max.html
[range]: https://nodef.github.io/extra-bigint/functions/range.html
[variance]: https://nodef.github.io/extra-bigint/functions/variance.html
[arithmeticMean]: https://nodef.github.io/extra-bigint/functions/arithmeticMean.html
[geometricMean]: https://nodef.github.io/extra-bigint/functions/geometricMean.html
[harmonicMean]: https://nodef.github.io/extra-bigint/functions/harmonicMean.html
[quadriaticMean]: https://nodef.github.io/extra-bigint/functions/quadriaticMean.html
[cubicMean]: https://nodef.github.io/extra-bigint/functions/cubicMean.html
