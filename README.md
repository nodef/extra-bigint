A [BigInt] can represent whole numbers larger than 2⁵³ - 1.<br>
📦 [NPM](https://www.npmjs.com/package/extra-bigint),
😺 [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-bigint),
🏃 [RunKit](https://npm.runkit.com/extra-bigint),
🌔 [Minified](https://www.npmjs.com/package/extra-bigint.min),
📜 [Files](https://unpkg.com/extra-bigint/),
📰 [JSDoc](https://nodef.github.io/extra-bigint/),
📘 [Wiki](https://github.com/nodef/extra-bigint/wiki/).

> Stability: Experimental.

<br>

```javascript
const bigint = require("extra-bigint");
// import * as bigint from "extra-bigint";
// import * as bigint from "https://unpkg.com/extra-bigint@0.0.60/index.mjs"; (deno)

bigint.log2(10n);
bigint.log2(11n);
bigint.log2(12n);
// 3
```

<br>
<br>


## Index

| Name             | Action                                     |
| ---------------- | ------------------------------------------ |
| [is]             | Checks if value is a BigInt.
| [isPrime]        | Checks if value is prime.
| [floorDiv]       | Gives value ≤ x/y.
| [ceilDiv]        | Gives value ≥ x/y.
| [abs]            | Gives absolute value.
| [sign]           | Gives sign of value.
| [rem]            | Gets remainder of x/y with sign of x (truncated division).
| [mod]            | Gets remainder of x/y with sign of y (floored division).
| [modp]           | Gets remainder of x/y with +ve sign (euclidean division).
| [sqrt]           | Gives square root of value.
| [cbrt]           | Gives cube root of value.
| [root]           | Gives nth root of value.
| [hypot]          | Gives length of hypotenuse.
| [log2]           | Gives base-2 logarithm of value.
| [log10]          | Gives base-10 logarithm of value.
| [min]            | Gives smallest value.
| [max]            | Gives largest value.
| [range]          | Gives smallest and largest value.
| [lcm]            | Gives least common multiple of values.
| [gcd]            | Gives greatest common divisor of values.
| [hcf]            | Gives highest common factor of values.
| [sum]            | Gives sum of values (Σ).
| [product]        | Gives product of values (∏).
| [arithmeticMean] | Gives arithmetic mean of values.
| [geometricMean]  | Gives geometric mean of values.
| [harmonicMean]   | Gives harmonic mean of values.
| [cubicMean]      | Gives cubic mean of values.

<br>
<br>

[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)

[![](https://api.travis-ci.com/nodef/extra-bigint.svg)](https://travis-ci.com/github/nodef/extra-bigint)
[![](https://coveralls.io/repos/github/nodef/extra-bigint/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-bigint?branch=master)

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[is]: https://github.com/nodef/extra-bigint/wiki/is
[abs]: https://github.com/nodef/extra-bigint/wiki/abs
[isPrime]: https://github.com/nodef/extra-bigint/wiki/isPrime
[floorDiv]: https://github.com/nodef/extra-bigint/wiki/floorDiv
[ceilDiv]: https://github.com/nodef/extra-bigint/wiki/ceilDiv
[sign]: https://github.com/nodef/extra-bigint/wiki/sign
[rem]: https://github.com/nodef/extra-bigint/wiki/rem
[mod]: https://github.com/nodef/extra-bigint/wiki/mod
[modp]: https://github.com/nodef/extra-bigint/wiki/modp
[sqrt]: https://github.com/nodef/extra-bigint/wiki/sqrt
[cbrt]: https://github.com/nodef/extra-bigint/wiki/cbrt
[root]: https://github.com/nodef/extra-bigint/wiki/root
[hypot]: https://github.com/nodef/extra-bigint/wiki/hypot
[log2]: https://github.com/nodef/extra-bigint/wiki/log2
[log10]: https://github.com/nodef/extra-bigint/wiki/log10
[min]: https://github.com/nodef/extra-bigint/wiki/min
[max]: https://github.com/nodef/extra-bigint/wiki/max
[range]: https://github.com/nodef/extra-bigint/wiki/range
[lcm]: https://github.com/nodef/extra-bigint/wiki/lcm
[gcd]: https://github.com/nodef/extra-bigint/wiki/gcd
[hcf]: https://github.com/nodef/extra-bigint/wiki/hcf
[sum]: https://github.com/nodef/extra-bigint/wiki/sum
[product]: https://github.com/nodef/extra-bigint/wiki/product
[arithmeticMean]: https://github.com/nodef/extra-bigint/wiki/arithmeticMean
[geometricMean]: https://github.com/nodef/extra-bigint/wiki/geometricMean
[harmonicMean]: https://github.com/nodef/extra-bigint/wiki/harmonicMean
[cubicMean]: https://github.com/nodef/extra-bigint/wiki/cubicMean
