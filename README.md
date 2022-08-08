A collection of functions for working with BigInts.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bigint),
🌐 [Web](https://www.npmjs.com/package/extra-bigint.web),
📜 [Files](https://unpkg.com/extra-bigint/),
📰 [Docs](https://nodef.github.io/extra-bigint/),
📘 [Wiki](https://github.com/nodef/extra-bigint/wiki/).

A [BigInt] can represent whole numbers larger than 2⁵³ - 1 [(1)]. *ES2020*
introduced it as a built-in object. `BigInt` enables us to represent integers
with arbitrary precision, allowing us to perform mathematical operations on
large integers [(2)]. This package provides operations to work with **sign**,
perform **arithmetic** operations such as division and **modulo**, finding
**roots**, working with **factors**, finding **logarithm**, and performing basic
**statistics** including a number of **means**.

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
| [isPrime] | Check if a bigint is prime. |
| [compare] | Compare two bigints. |
|  |  |
| [abs] | Get the absolute of a bigint. |
| [sign] | Get the sign of a bigint. |
|  |  |
| [floorDiv] | Calculate the floor division of bigints (\\). |
| [ceilDiv] | Calculate the floor division of bigints. |
|  |  |
| [rem] | Find the remainder of x/y with sign of x (truncated division). |
| [mod] | Find the remainder of x/y with sign of y (floored division). |
| [modp] | Find the remainder of x/y with +ve sign (euclidean division). |
|  |  |
| [sqrt] | Find the square root of a bigint. |
| [cbrt] | Find the cube root of a bigint. |
| [root] | Find the nth root of a bigint. |
|  |  |
| [gcd] | Find the greatest common divisor of bigints. |
| [lcm] | Find the least common multiple of bigints. |
|  |  |
| [isPow2] | Check if bigint is a power-of-2. |
| [prevPow2] | Find previous power-of-2 of a bigint. |
| [nextPow2] | Find next power-of-2 of a bigint. |
| [log2] | Find the base-2 logarithm of a bigint. |
| [log10] | Find the base-10 logarithm of a bigint. |
|  |  |
| [hypot] | Find the length of hypotenuse. |
|  |  |
| [sum] | Find the sum of bigints (Σ). |
| [product] | Find the product of bigints (∏). |
| [min] | Find the smallest bigint. |
| [max] | Find the largest bigint. |
| [range] | Find the minimum and maximum bigint. |
| [arithmeticMean] | Find the arithmetic mean of bigints (µ). |
| [geometricMean] | Find the geometric mean of bigints. |
| [harmonicMean] | Find the harmonic mean of bigints. |
| [quadriaticMean] | Find the quadriatic mean of bigints. |
| [cubicMean] | Find the cubic mean of bigints. |

<br>
<br>


[![](https://img.youtube.com/vi/RJS3Z2DYEO4/maxresdefault.jpg)](https://www.youtube.com/watch?v=RJS3Z2DYEO4)<br>
[![DOI](https://zenodo.org/badge/274701321.svg)](https://zenodo.org/badge/latestdoi/274701321)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-bigint/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-bigint?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7efb0a005561ff8b1df7/test_coverage)](https://codeclimate.com/github/nodef/extra-bigint/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/7efb0a005561ff8b1df7/maintainability)](https://codeclimate.com/github/nodef/extra-bigint/maintainability)


[is]: https://nodef.github.io/extra-bigint/modules.html#is
[isPrime]: https://nodef.github.io/extra-bigint/modules.html#isPrime
[compare]: https://nodef.github.io/extra-bigint/modules.html#compare
[abs]: https://nodef.github.io/extra-bigint/modules.html#abs
[sign]: https://nodef.github.io/extra-bigint/modules.html#sign
[floorDiv]: https://nodef.github.io/extra-bigint/modules.html#floorDiv
[ceilDiv]: https://nodef.github.io/extra-bigint/modules.html#ceilDiv
[rem]: https://nodef.github.io/extra-bigint/modules.html#rem
[mod]: https://nodef.github.io/extra-bigint/modules.html#mod
[modp]: https://nodef.github.io/extra-bigint/modules.html#modp
[sqrt]: https://nodef.github.io/extra-bigint/modules.html#sqrt
[cbrt]: https://nodef.github.io/extra-bigint/modules.html#cbrt
[root]: https://nodef.github.io/extra-bigint/modules.html#root
[gcd]: https://nodef.github.io/extra-bigint/modules.html#gcd
[lcm]: https://nodef.github.io/extra-bigint/modules.html#lcm
[log2]: https://nodef.github.io/extra-bigint/modules.html#log2
[log10]: https://nodef.github.io/extra-bigint/modules.html#log10
[hypot]: https://nodef.github.io/extra-bigint/modules.html#hypot
[sum]: https://nodef.github.io/extra-bigint/modules.html#sum
[product]: https://nodef.github.io/extra-bigint/modules.html#product
[min]: https://nodef.github.io/extra-bigint/modules.html#min
[max]: https://nodef.github.io/extra-bigint/modules.html#max
[range]: https://nodef.github.io/extra-bigint/modules.html#range
[arithmeticMean]: https://nodef.github.io/extra-bigint/modules.html#arithmeticMean
[geometricMean]: https://nodef.github.io/extra-bigint/modules.html#geometricMean
[harmonicMean]: https://nodef.github.io/extra-bigint/modules.html#harmonicMean
[quadriaticMean]: https://nodef.github.io/extra-bigint/modules.html#quadriaticMean
[cubicMean]: https://nodef.github.io/extra-bigint/modules.html#cubicMean
[isPow2]: https://nodef.github.io/extra-bigint/modules.html#isPow2
[prevPow2]: https://nodef.github.io/extra-bigint/modules.html#prevPow2
[nextPow2]: https://nodef.github.io/extra-bigint/modules.html#nextPow2
