A [BigInt] can represent whole numbers larger than 2⁵³ - 1 [(1)].<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-bigint),
📦 [NPM](https://www.npmjs.com/package/extra-bigint),
📰 [Docs](https://jsr.io/@nodef/extra-bigint/doc).

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

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[(1)]: https://www.geeksforgeeks.org/bigint-in-javascript/
[(2)]: https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/

<br>

```javascript
import * as xbigint from "jsr:@nodef/extra-bigint";

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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-bigint)


[is]: https://jsr.io/@nodef/extra-version/doc/~/is
[compare]: https://jsr.io/@nodef/extra-version/doc/~/compare
[abs]: https://jsr.io/@nodef/extra-version/doc/~/abs
[sign]: https://jsr.io/@nodef/extra-version/doc/~/sign
[floorDiv]: https://jsr.io/@nodef/extra-version/doc/~/floorDiv
[ceilDiv]: https://jsr.io/@nodef/extra-version/doc/~/ceilDiv
[roundDiv]: https://jsr.io/@nodef/extra-version/doc/~/roundDiv
[rem]: https://jsr.io/@nodef/extra-version/doc/~/rem
[mod]: https://jsr.io/@nodef/extra-version/doc/~/mod
[modp]: https://jsr.io/@nodef/extra-version/doc/~/modp
[constrain]: https://jsr.io/@nodef/extra-version/doc/~/constrain
[remap]: https://jsr.io/@nodef/extra-version/doc/~/remap
[lerp]: https://jsr.io/@nodef/extra-version/doc/~/lerp
[isPow2]: https://jsr.io/@nodef/extra-version/doc/~/isPow2
[isPow10]: https://jsr.io/@nodef/extra-version/doc/~/isPow10
[prevPow2]: https://jsr.io/@nodef/extra-version/doc/~/prevPow2
[prevPow10]: https://jsr.io/@nodef/extra-version/doc/~/prevPow10
[nextPow2]: https://jsr.io/@nodef/extra-version/doc/~/nextPow2
[nextPow10]: https://jsr.io/@nodef/extra-version/doc/~/nextPow10
[log2]: https://jsr.io/@nodef/extra-version/doc/~/log2
[log10]: https://jsr.io/@nodef/extra-version/doc/~/log10
[sqrt]: https://jsr.io/@nodef/extra-version/doc/~/sqrt
[cbrt]: https://jsr.io/@nodef/extra-version/doc/~/cbrt
[root]: https://jsr.io/@nodef/extra-version/doc/~/root
[properDivisors]: https://jsr.io/@nodef/extra-version/doc/~/properDivisors
[aliquotSum]: https://jsr.io/@nodef/extra-version/doc/~/aliquotSum
[minPrimeFactor]: https://jsr.io/@nodef/extra-version/doc/~/minPrimeFactor
[maxPrimeFactor]: https://jsr.io/@nodef/extra-version/doc/~/maxPrimeFactor
[primeFactors]: https://jsr.io/@nodef/extra-version/doc/~/primeFactors
[primeExponentials]: https://jsr.io/@nodef/extra-version/doc/~/primeExponentials
[isPrime]: https://jsr.io/@nodef/extra-version/doc/~/isPrime
[gcd]: https://jsr.io/@nodef/extra-version/doc/~/gcd
[lcm]: https://jsr.io/@nodef/extra-version/doc/~/lcm
[factorial]: https://jsr.io/@nodef/extra-version/doc/~/factorial
[binomial]: https://jsr.io/@nodef/extra-version/doc/~/binomial
[multinomial]: https://jsr.io/@nodef/extra-version/doc/~/multinomial
[hypot]: https://jsr.io/@nodef/extra-version/doc/~/hypot
[sum]: https://jsr.io/@nodef/extra-version/doc/~/sum
[product]: https://jsr.io/@nodef/extra-version/doc/~/product
[median]: https://jsr.io/@nodef/extra-version/doc/~/median
[modes]: https://jsr.io/@nodef/extra-version/doc/~/modes
[min]: https://jsr.io/@nodef/extra-version/doc/~/min
[max]: https://jsr.io/@nodef/extra-version/doc/~/max
[range]: https://jsr.io/@nodef/extra-version/doc/~/range
[variance]: https://jsr.io/@nodef/extra-version/doc/~/variance
[arithmeticMean]: https://jsr.io/@nodef/extra-version/doc/~/arithmeticMean
[geometricMean]: https://jsr.io/@nodef/extra-version/doc/~/geometricMean
[harmonicMean]: https://jsr.io/@nodef/extra-version/doc/~/harmonicMean
[quadriaticMean]: https://jsr.io/@nodef/extra-version/doc/~/quadriaticMean
[cubicMean]: https://jsr.io/@nodef/extra-version/doc/~/cubicMean
