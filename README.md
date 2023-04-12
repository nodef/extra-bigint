A [BigInt] can represent whole numbers larger than 2⁵³ - 1 [(1)].<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bigint),
🌐 [Web](https://www.npmjs.com/package/extra-bigint.web),
📜 [Files](https://unpkg.com/extra-bigint/),
📰 [Docs](https://nodef.github.io/extra-bigint/),
📘 [Wiki](https://github.com/nodef/extra-bigint/wiki/).

*ES2020* introduced **BigInt** as a built-in object. **BigInt** enables us to
represent integers with arbitrary precision, allowing us to perform mathematical
operations on large integers [(2)]. This package includes common bigint
functions related to querying **about** numbers, **comparing** numbers,
performing **rounded division**, performing **modulo** operations, **controlling**
**range** of numbers, performing **arithmetic** operations, obtaining **divisors**
of a number (and related operations), getting the number of possible
**arrangements** of a set of objects, performing **geometry**-related
calculations, performing basic **statistical** analysis, and finding various
**statistical means**.

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_bigint` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[(1)]: https://www.geeksforgeeks.org/bigint-in-javascript/
[(2)]: https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bigint.web/index.js

<br>

```javascript
const xbigint = require('extra-bigint');
// import * as xbigint from "extra-bigint";
// import * as xbigint from "https://unpkg.com/extra-bigint/index.mjs"; (deno)

xbigint.isPrime(113n);
// → true

xbigint.floorDiv(7n, 3n);
// → 2n

xbigint.sqrt(81n);
// → 9n

xbigint.lcm(2n, 3n, 4n);
// → 12n

xbigint.log2(8n);
// → 3n

xbigint.sum(1n, 2n, 3n, 4n);
// → 10n

xbigint.mean(1n, 7n, 8n);
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
| [prevPow2] | Find largest power-of-2 less than or equal to given bigint. |
| [prevPow10] | Find largest power-of-10 less than or equal to given bigint. |
| [nextPow2] | Find smallest power-of-2 greater than or equal to given bigint. |
| [nextPow10] | Find smallest power-of-10 greater than or equal to given bigint. |
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


[is]: https://github.com/nodef/extra-bigint/wiki/is
[compare]: https://github.com/nodef/extra-bigint/wiki/compare
[abs]: https://github.com/nodef/extra-bigint/wiki/abs
[sign]: https://github.com/nodef/extra-bigint/wiki/sign
[floorDiv]: https://github.com/nodef/extra-bigint/wiki/floorDiv
[ceilDiv]: https://github.com/nodef/extra-bigint/wiki/ceilDiv
[roundDiv]: https://github.com/nodef/extra-bigint/wiki/roundDiv
[rem]: https://github.com/nodef/extra-bigint/wiki/rem
[mod]: https://github.com/nodef/extra-bigint/wiki/mod
[modp]: https://github.com/nodef/extra-bigint/wiki/modp
[constrain]: https://github.com/nodef/extra-bigint/wiki/constrain
[remap]: https://github.com/nodef/extra-bigint/wiki/remap
[lerp]: https://github.com/nodef/extra-bigint/wiki/lerp
[isPow2]: https://github.com/nodef/extra-bigint/wiki/isPow2
[isPow10]: https://github.com/nodef/extra-bigint/wiki/isPow10
[prevPow2]: https://github.com/nodef/extra-bigint/wiki/prevPow2
[prevPow10]: https://github.com/nodef/extra-bigint/wiki/prevPow10
[nextPow2]: https://github.com/nodef/extra-bigint/wiki/nextPow2
[nextPow10]: https://github.com/nodef/extra-bigint/wiki/nextPow10
[log2]: https://github.com/nodef/extra-bigint/wiki/log2
[log10]: https://github.com/nodef/extra-bigint/wiki/log10
[sqrt]: https://github.com/nodef/extra-bigint/wiki/sqrt
[cbrt]: https://github.com/nodef/extra-bigint/wiki/cbrt
[root]: https://github.com/nodef/extra-bigint/wiki/root
[properDivisors]: https://github.com/nodef/extra-bigint/wiki/properDivisors
[aliquotSum]: https://github.com/nodef/extra-bigint/wiki/aliquotSum
[minPrimeFactor]: https://github.com/nodef/extra-bigint/wiki/minPrimeFactor
[maxPrimeFactor]: https://github.com/nodef/extra-bigint/wiki/maxPrimeFactor
[primeFactors]: https://github.com/nodef/extra-bigint/wiki/primeFactors
[primeExponentials]: https://github.com/nodef/extra-bigint/wiki/primeExponentials
[isPrime]: https://github.com/nodef/extra-bigint/wiki/isPrime
[gcd]: https://github.com/nodef/extra-bigint/wiki/gcd
[lcm]: https://github.com/nodef/extra-bigint/wiki/lcm
[factorial]: https://github.com/nodef/extra-bigint/wiki/factorial
[binomial]: https://github.com/nodef/extra-bigint/wiki/binomial
[multinomial]: https://github.com/nodef/extra-bigint/wiki/multinomial
[hypot]: https://github.com/nodef/extra-bigint/wiki/hypot
[sum]: https://github.com/nodef/extra-bigint/wiki/sum
[product]: https://github.com/nodef/extra-bigint/wiki/product
[median]: https://github.com/nodef/extra-bigint/wiki/median
[modes]: https://github.com/nodef/extra-bigint/wiki/modes
[min]: https://github.com/nodef/extra-bigint/wiki/min
[max]: https://github.com/nodef/extra-bigint/wiki/max
[range]: https://github.com/nodef/extra-bigint/wiki/range
[variance]: https://github.com/nodef/extra-bigint/wiki/variance
[arithmeticMean]: https://github.com/nodef/extra-bigint/wiki/arithmeticMean
[geometricMean]: https://github.com/nodef/extra-bigint/wiki/geometricMean
[harmonicMean]: https://github.com/nodef/extra-bigint/wiki/harmonicMean
[quadriaticMean]: https://github.com/nodef/extra-bigint/wiki/quadriaticMean
[cubicMean]: https://github.com/nodef/extra-bigint/wiki/cubicMean
