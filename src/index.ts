// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a bigint.
 * @param x a value
 * @returns is bigint?
 */
export function is(x: any): x is bigint {
  return typeof x==="bigint";
}




// COMPARE
// -------

/**
 * Compare two bigints.
 * @param x a bigint
 * @param y another bigint
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 */
export function compare(x: bigint, y: bigint): number {
  return Number(x-y);
}




// SIGN
// ----

/**
 * Get the absolute of a bigint.
 * @param x a bigint
 * @returns |x|
 */
export function abs(x: bigint): bigint {
  return x<0n? -x : x;
}


/**
 * Get the sign of a bigint.
 * @param x a bigint
 * @returns x>0: 1n, x<0: -1n, x=0: 0n
 */
export function sign(x: bigint): bigint {
  return x<0n? -1n : (x>0n? 1n : 0n);
}




// ROUNDED DIVISION
// ----------------

/**
 * Perform floor-divison of two bigints (\\).
 * @param x dividend
 * @param y divisor
 * @returns ⌊x/y⌋
 */
export function floorDiv(x: bigint, y: bigint): bigint {
  if (y<0n) { x = -x; y = -y; }
  return x>=0n? x/y : (x-y+1n)/y;
}
// - https://python-reference.readthedocs.io/en/latest/docs/operators/floor_division.html


/**
 * Perform ceiling-divison of two bigints.
 * @param x dividend
 * @param y divisor
 * @returns ⌈x/y⌉
 */
export function ceilDiv(x: bigint, y: bigint): bigint {
  if (y<0n) { x = -x; y = -y; }
  return x>=0n? (x+y-1n)/y : x/y;
}


/**
 * Perform rounded-divison of two bigints.
 * @param x divisor
 * @param y dividend
 * @returns [x/y]
 */
export function roundDiv(x: bigint, y: bigint): bigint {
  if (y<0n) { x = -x; y = -y; }
  return x>=0n? (x+y/2n)/y : (x-y/2n)/y;
}




// MODULO
// ------

/**
 * Find the remainder of x/y with sign of x (truncated division).
 * @param x dividend
 * @param y divisor
 * @returns trunc(x % y)
 */
export function rem(x: bigint, y: bigint): bigint {
  return x % y;
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 * @returns floor(x % y)
 */
export function mod(x: bigint, y: bigint): bigint {
  return x - y*floorDiv(x, y);
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 * @returns x/y>0: floor(x % y), x/y<0: ceil(x % y)
 */
export function modp(x: bigint, y: bigint): bigint {
  return x - abs(y)*floorDiv(x, abs(y));
}
// - https://en.wikipedia.org/wiki/Modulo_operation




// RANGE CONTROL
// -------------

/**
 * Constrain a bigint within a minimum and a maximum value.
 * @param x a bigint
 * @param minv minimum value
 * @param maxv maximum value
 * @returns x<min: min, x>max: max, x
 */
export function constrain(x: bigint, minv: bigint, maxv: bigint): bigint {
  return min(max(x, minv), maxv);
}
export {constrain as clamp};
// - https://processing.org/reference/constrain_.html
// - https://www.npmjs.com/package/clamp
// - https://en.cppreference.com/w/cpp/algorithm/clamp
// - https://dlang.org/library/std/algorithm/comparison/clamp.html
// - https://www.rdocumentation.org/packages/raster/versions/3.0-12/topics/clamp
// - https://docs.microsoft.com/en-us/dotnet/api/system.math.clamp?view=netcore-3.1
// - https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-clamp
// - https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/clamp.xhtml
// - https://docs.unity3d.com/ScriptReference/Mathf.Clamp.html
// - https://en.wikipedia.org/wiki/Clamping_(graphics)


/**
 * Re-map a bigint from one range to another.
 * @param x a bigint
 * @param r lower bound of current range
 * @param R upper bound of current range
 * @param t lower bound of target range
 * @param T upper bound of target range
 * @returns ∈ [ymin, ymax]
 */
export function remap(x: bigint, r: bigint, R: bigint, t: bigint, T: bigint): bigint {
  return t + (x - r)*(T - t)/(R - r);
}
export {remap as map};
// - https://processing.org/reference/map_.html


/**
 * Linearly interpolate a bigint between two bigints.
 * @param x start bigint
 * @param y stop bigint
 * @param t interpolant ∈ [0, 1]
 * @returns ∈ [x, y]
 */
export function lerp(x: bigint, y: bigint, t: number): bigint {
  return x + BigInt(Math.floor(t*Number(y - x)));
}
// - https://processing.org/reference/lerp_.html
// - https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html
// - https://stackoverflow.com/questions/53970655/how-to-convert-bigint-to-number-in-javascript




// POWER / LOGARITHM
// -----------------

/**
 * Check if bigint is a power-of-2.
 * @param x a bigint
 * @returns 2ⁱ = x? | i = +ve integer
 */
export function isPow2(x: bigint): boolean {
  return /^10*$/.test(x.toString(2));
}


/**
 * Check if bigint is a power-of-10.
 * @param x a bigint
 * @returns 10ⁱ = x? | i = +ve integer
 */
export function isPow10(x: bigint): boolean {
  return /^10*$/.test(x.toString());
}


/**
 * Find previous power-of-2 of a bigint.
 * @param x a bigint
 * @returns 2ⁱ | 2ⁱ < x and 2ⁱ ≥ x/2
 */
export function prevPow2(x: bigint): bigint {
  var n = (abs(x) - 1n).toString(2).length - 1;
  return n<=0? 0n : BigInt("0b1"+"0".repeat(n));
}


/**
 * Find previous power-of-10 of a bigint.
 * @param x a bigint
 * @returns 10ⁱ | 10ⁱ < x and 10ⁱ ≥ x/10
 */
export function prevPow10(x: bigint): bigint {
  var n = (abs(x) - 1n).toString().length - 1;
  return x<=0? 0n : BigInt("1"+"0".repeat(n));
}


/**
 * Find next power-of-2 of a bigint.
 * @param x a bigint
 * @returns 2ⁱ | 2ⁱ > x and 2ⁱ ≤ 2x
 */
export function nextPow2(x: bigint): bigint {
  var n = abs(x).toString(2).length - 1;
  return x<=0n? 1n : BigInt("0b1"+"0".repeat(n+1));
}


/**
 * Find next power-of-10 of a bigint.
 * @param x a bigint
 * @returns 10ⁱ | 10ⁱ > x and 10ⁱ ≤ 10x
 */
export function nextPow10(x: bigint): bigint {
  var n = abs(x).toString().length - 1;
  return x<=0n? 1n : BigInt("1"+"0".repeat(n+1));
}


/**
 * Find the base-2 logarithm of a bigint.
 * @param x a bigint
 * @returns log₂(x)
 */
export function log2(x: bigint): bigint {
  var n = x.toString(2).length - 1;
  return x<=0n? 0n : BigInt(n);
}


/**
 * Find the base-10 logarithm of a bigint.
 * @param x a bigint
 * @returns log₁₀(x)
 */
export function log10(x: bigint): bigint {
  var n = x.toString().length - 1;
  return x<=0n? 0n : BigInt(n);
}


// TODO: isPow() based on accelerated search
// TODO: prevPow() based on accelerated search
// TODO: nextPow() based on accelerated search
// TODO: log() based on accelerated search




// ROOT
// ----

/**
 * Find the square root of a bigint.
 * @param x a bigint
 * @returns √x
 */
export function sqrt(x: bigint): bigint {
  if (x===0n) return 0n;
  return x>0n? sqrtPos(x) : null;
}

function sqrtPos(x: bigint): bigint {
  var a = 1n << (log2(x)/2n + 1n);  // initial guess
  var b = 1n + a;
  while (a<b) {
    b = a;
    a = (b + x/b)/2n;
  }
  return b;
}


/**
 * Find the cube root of a bigint.
 * @param x a bigint
 * @returns ³√x
 */
export function cbrt(x: bigint): bigint {
  return root(x, 3n);
}


/**
 * Find the nth root of a bigint.
 * @param x a bigint
 * @param n nth root (1n)
 * @returns ⁿ√x
 */
export function root(x: bigint, n: bigint=1n): bigint {
  if (x===0n) return 0n;
  else if (x>0n) return rootPos(x, n);
  return n % 2n!==0n?  -rootPos(-x, n) : null;
}

function rootPos(x: bigint, n: bigint): bigint {
  var a = 1n << (log2(x)/n + 1n);  // initial guess
  var b = 1n + a, m = n - 1n;
  if (a===2n) return 1n;
  while (a<b) {
    b = a;
    a = (m*b + x/b**m)/n;
  }
  return b;
}




// DIVISORS
// --------

/**
 * List all divisors of a bigint, except itself.
 * @param x a bigint
 * @returns proper divisors (factors)
 */
export function properDivisors(x: bigint): bigint[] {
  var x = abs(x), a = [];
  for (var i=1n; i<x; i++)
    if (x % i===0n) a.push(i);
  return a;
}
export {properDivisors as aliquotParts};
// - https://mathworld.wolfram.com/ProperDivisor.html
// - https://en.wikipedia.org/wiki/Divisor#Further_notions_and_facts


/**
 * Sum all proper divisors of a bigint.
 * @param x a bigint
 * @returns Σdᵢ | dᵢ is a divisor of x and ≠x
 */
export function aliquotSum(x: bigint): bigint {
  var x = abs(x), a = 0n;
  for (var i=1n; i<x; i++)
    if (x % i===0n) a += i;
  return a;
}


/**
 * Find the least prime number which divides a bigint.
 * @param x a bigint
 * @returns least prime factor
 */
export function minPrimeFactor(x: bigint): bigint {
  var x = abs(x);
  // 1. LPF of 2, 3 is the number itself.
  if (x<=1n) return 0n;
  if (x<=3n) return x;
  // 2. LPF for multiples of 2, 3.
  if (x % 2n===0n) return 2n;
  if (x % 3n===0n) return 3n;
  // 3. LPF can be 6k-1 or 6k+1.
  for (var i=6n, I=sqrt(x)+1n; i<=I; i+=6n) {
    if (x % (i-1n)===0n) return i-1n;
    if (x % (i+1n)===0n) return i+1n;
  }
  return x;
}
export {minPrimeFactor as leastPrimeFactor};
// - https://mathworld.wolfram.com/LeastPrimeFactor.html


/**
 * Find the greatest prime number which divides a bigint.
 * @param x a bigint
 * @returns greatest prime factor
 */
export function maxPrimeFactor(x: bigint): bigint {
  var x = abs(x), a = 0n;
  // 1. GPF of 2, 3 is the number itself.
  if (x<=1n) return 0n;
  if (x<=3n) return x;
  // 2. Remove factors 2, 3.
  for (; x % 2n===0n; a=2n)
    x /= 2n;
  for (; x % 3n===0n; a=3n)
    x /= 3n;
  // 3. Remove factors 6k-1, 6k+1.
  for (var i=6n, I=sqrt(x)+1n; x>1n && i<=I; i+=6n) {
    for (; x % (i-1n)==0n; a=i-1n)
      x /= i-1n;
    for (; x % (i+1n)==0n; a=i+1n)
      x /= i+1n;
  }
  if (x<=1n) return a;
  return x;
}
export {maxPrimeFactor as greatestPrimeFactor};
// - https://mathworld.wolfram.com/GreatestPrimeFactor.html
// - https://www.geeksforgeeks.org/find-largest-prime-factor-number/


/**
 * Find the prime factors of a bigint.
 * @param x a bigint
 * @returns [f₀, f₁, ...] | fᵢ divides x and is prime
 */
export function primeFactors(x: bigint): bigint[] {
  var x = abs(x), a = [];
  if (x<=1n) return [];
  if (x<=3n) return [x];
  // 2. Try factors 2, 3.
  x = pushPrimeFactorTo$(a, x, 2n);
  x = pushPrimeFactorTo$(a, x, 3n);
  // 3. Try factors 6k-1, 6k+1.
  for (var i=6n, I=sqrt(x)+1n; x>1n && i<=I; i+=6n) {
    x = pushPrimeFactorTo$(a, x, i-1n);
    x = pushPrimeFactorTo$(a, x, i+1n);
  }
  if (x>1n) a.push(x);
  return a;
}

function pushPrimeFactorTo$(a: bigint[], x: bigint, f: bigint): bigint {
  if (x % f!==0n) return x;
  x /= f;
  a.push(f);
  while (x % f===0n)
    x /= f;
  return x;
}
// - https://www.geeksforgeeks.org/prime-factors-big-number/
// - https://mathworld.wolfram.com/PrimeFactor.html


/**
 * Check if bigint is prime.
 * @param x a bigint
 * @returns is divisible by 1n and itself only?
 */
export function isPrime(x: bigint): boolean {
  return x!==0n && minPrimeFactor(x) === abs(x);
}


/**
 * Find the greatest common divisor of bigints.
 * @param xs a list of bigints
 * @returns gcd(x₁, x₂, ...)
 */
export function gcd(...xs: bigint[]): bigint {
  var a = xs[0] || 1n;
  for(var i=1, I=xs.length; i<I; i++)
    a = gcdPair(a, xs[i]);
  return a;
}
export {gcd as hcf};

// Find the greatest common divisor of a pair of bigints.
function gcdPair(x: bigint, y: bigint): bigint {
  while (y!==0n) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
// - https://lemire.me/blog/2013/12/26/fastest-way-to-compute-the-greatest-common-divisor/
// - https://en.wikipedia.org/wiki/Euclidean_algorithm


/**
 * Find the least common multiple of bigints.
 * @param xs a list of bigints
 * @returns lcm(x₁, x₂, ...)
 */
export function lcm(...xs: bigint[]): bigint {
  var a = xs[0] || 1n;
  for (var i=1, I=xs.length; i<I; i++)
      a = a*xs[i] / gcdPair(a, xs[i]);
  return a;
}
// - https://en.wikipedia.org/wiki/Least_common_multiple




// ARRANGEMENTS
// ------------

/**
 * Find the factorial of a bigint.
 * @param n a bigint
 * @param k denominator factorial [0]
 * @returns P(n, k); k=0: n!, k>0: n!/k!
 */
export function factorial(n: bigint, k: bigint=0n): bigint {
  if (n<0n) return 0n;
  for (var i=k+1n, a=1n; i<=n; i++)
    a *= i;
  return a;
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/factorial.ts
// - https://en.wikipedia.org/wiki/Permutation


/**
 * Find the number of ways to choose k elements from a set of n elements.
 * @param n elements in source set
 * @param k elements in choose set
 * @returns C(n, k)
 */
export function binomial(n: bigint, k: bigint): bigint {
  // 1. Generalization to negative integers
  if (k<0n || k>abs(n)) return 0n;
  if (n<0n) return ((-1n)**k)*binomial(-n, k);
  // 2. Take advantage of symmetry
  k = k>n-k? n-k:k;
  for (var a=1n, b=1n, i=1n; i<=k; i++, n--) {
    a *= n;
    b *= i;
  }
  return a/b;
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/binomial.ts
// - https://en.wikipedia.org/wiki/Binomial_coefficient


/**
 * Find the number of ways to put n objects in m bins (n=sum(kᵢ)).
 * @param ks objects per bin (kᵢ)
 * @returns n!/(k₁!k₂!...) | n=sum(kᵢ)
 */
export function multinomial(...ks: bigint[]): bigint {
  var n = sum(...ks), a = 1n, b = 1n;
  for (var i=0, j=0n, I=ks.length; i<I;) {
    if (j<=0n) j = ks[i++];
    else { a *= n--; b*= j--; }
  }
  return a/b;
}
// - https://en.wikipedia.org/wiki/Multinomial_distribution




// GEOMETRY
// --------

/**
 * Find the length of hypotenuse.
 * @param xs lengths of perpendicular sides (x, y, z, ...)
 * @returns √(x² + y² + z²)
 */
export function hypot(...xs: bigint[]): bigint {
  var a = 0n;
  for (var x of xs)
    a += x*x;
  return sqrt(a);
}




// STATISTICS
// ----------

/**
 * Find the sum of bigints (Σ).
 * @param xs bigints
 * @returns Σxᵢ
 */
export function sum(...xs: bigint[]): bigint {
  var a = 0n;
  for (var x of xs)
    a += x;
  return a;
}


/**
 * Find the product of bigints (∏).
 * @param xs bigints
 * @returns ∏xᵢ
 */
export function product(...xs: bigint[]): bigint {
  var a = 1n;
  for (var x of xs)
    a *= x;
  return a;
}


/**
 * Find the value separating the higher and lower halves of bigints.
 * @param xs a list of bigints
 * @returns xₘ | sort(xs) = [..., xₘ, ...]
 */
export function median(...xs: bigint[]): bigint {
  if (xs.length===0) return 0n;
  xs.sort(compare);
  var i = xs.length>>1;
  if ((xs.length & 1)===1) return xs[i];
  return (xs[i-1] + xs[i])/2n;
}
// - https://stackoverflow.com/questions/45309447/calculating-median-javascript
// - https://en.wikipedia.org/wiki/Median


/**
 * Find the values that appear most often.
 * @param xs a list of bigints
 * @returns [xₘ₁, xₘ₂, ...] | count(xₘᵢ) ≥ count(xᵢ) ∀ xᵢ ∈ xs
 */
export function modes(...xs: bigint[]): bigint[] {
  xs.sort(compare);
  var r = maxRepeat(xs);
  return getRepeats(xs, r);
}
// - https://en.wikipedia.org/wiki/Mode_(statistics)

// Get the maximum number of times any bigint has repeated in a sorted array.
function maxRepeat(xs: bigint[]): number {
  var count = Math.min(xs.length, 1), max = count;
  for (var i=1, I=xs.length; i<I; i++) {
    if (xs[i-1]===xs[i]) count++;
    else { max = Math.max(max, count); count = 1; }
  }
  return Math.max(max, count);
}

// Get the numbers which have been repeated atleast given number of times.
function getRepeats(xs: bigint[], r: number): bigint[] {
  var a: bigint[] = []; r--;
  for (var i=0, I=xs.length-r; i<I; i++)
    if (xs[i]===xs[i+r]) a.push(xs[i+=r]);
  return a;
}


/**
 * Find the smallest bigint.
 * @param xs bigints
 * @returns min(xs)
 */
export function min(...xs: bigint[]): bigint {
  if (xs.length===0) return 0n;
  var a = xs[0];
  for (var x of xs)
    a = x<a? x : a;
  return a;
}


/**
 * Find the largest bigint.
 * @param xs bigints
 * @returns max(xs)
 */
export function max(...xs: bigint[]): bigint {
  if (xs.length===0) return 0n;
  var a = xs[0];
  for (var x of xs)
    a = x>a? x : a;
  return a;
}


/**
 * Find the minimum and maximum bigint.
 * @param xs bigints
 * @returns [min, max]
 */
export function range(...xs: bigint[]): [bigint, bigint] {
  if (xs.length===0) return [0n, 0n];
  var a = xs[0], b = a;
  for (var x of xs) {
    a = x<a? x : a;
    b = x>b? x : b;
  }
  return [a, b];
}


/**
 * Find the mean of squared deviation of bigints from its mean.
 * @param xs a list of bigints
 * @returns σ² = E[(xs - µ)²] | µ = mean(xs)
 */
export function variance(...xs: bigint[]): bigint {
  if (xs.length===0) return 0n;
  var m = arithmeticMean(...xs), a = 0n;
  for (var x of xs)
    a += (x-m)**2n;
  return a/BigInt(xs.length);
}
// - https://en.wikipedia.org/wiki/Variance




// MEAN (STATISTICS)
// -----------------

/**
 * Find the arithmetic mean of bigints (µ).
 * @param xs bigints
 * @returns µ = (Σxᵢ)/n | n = size(xs)
 */
export function arithmeticMean(...xs: bigint[]): bigint {
  var n = BigInt(xs.length);
  return sum(...xs)/n;
}
export {arithmeticMean as mean};


/**
 * Find the geometric mean of bigints.
 * @param xs bigints
 * @returns ⁿ√(∏xᵢ) | n = size(xs)
 */
export function geometricMean(...xs: bigint[]): bigint {
  var n = BigInt(xs.length);
  return root(product(...xs), n);
}


/**
 * Find the harmonic mean of bigints.
 * @param xs bigints
 * @returns n/Σ(1/xᵢ) | n = size(xs)
 */
export function harmonicMean(...xs: bigint[]): bigint {
  var n = BigInt(xs.length);
  var p = product(...xs), q = 0n;
  for (var x of xs)
    q += p/x;
  return n*p/q;
}


/**
 * Find the quadriatic mean of bigints.
 * @param xs bigints
 * @returns √(Σxᵢ²)/n | n = size(xs)
 */
export function quadriaticMean(...xs: bigint[]): bigint {
  var n = BigInt(xs.length);
  var a = 0n;
  for (var x of xs)
    a += x*x;
  return sqrt(a/n);
}
export {quadriaticMean as rootMeanSquare};


/**
 * Find the cubic mean of bigints.
 * @param xs bigints
 * @returns ³√(Σxᵢ³)/n | n = size(xs)
 */
export function cubicMean(...xs: bigint[]): bigint {
  var n = BigInt(xs.length);
  var a = 0n;
  for (var x of xs)
    a += x**3n;
  return cbrt(a/n);
}
