// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a BigInt.
 * @param x a value
 */
export function is(x: any): x is bigint {
  return typeof x === 'bigint';
}


/**
 * Check if a value is prime.
 * @param x a bigint
 */
export function isPrime(x: bigint): boolean {
  x = abs(x);
  // 2, 3 are prime
  if (x<=3n) return x>1n;
  // multiples of 2, 3 not prime
  if (x % 2n===0n || x % 3n===0n) return false;
  // factor of 6k-1 or 6k+1 => not prime
  for (var i=6n, I=sqrt(x)+1n; i<=I; i+=6n)
    if (x % (i-1n)===0n || x % (i+1n)===0n) return false;
  return true;
}


/**
 * Compare two values.
 * @param x a bigint
 * @param y another bigint
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
export function compare(x: bigint, y: bigint): bigint {
  return x<y? -1n : (x>y? 1n : 0n);
}




// SIGN
// ----

/**
 * Get the absolute of a value.
 * @param x a bigint
 */
export function abs(x: bigint): bigint {
  return x<0n? -x as any : x;
}


/**
 * Find the sign of a value.
 * @param x a bigint
 * @returns +ve: 1n, -ve: -1n, 0: 0n
 */
export function sign(x: bigint): bigint {
  return x<0n? -1n : (x>0n? 1n : 0n);
}




// ARITHMETIC
// ----------

/**
 * Find the value ≤ x/y.
 * @param x dividend
 * @param y divisor
 */
export function floorDiv(x: bigint, y: bigint): bigint {
  if (y<0n) { x=-x; y=-y; }
  return x>=0n ? (x/y) : ((x+1n)/y)-1n;
}


/**
 * Find the value ≥ x/y.
 * @param x dividend
 * @param y divisor
 */
export function ceilDiv(x: bigint, y: bigint): bigint {
  if (y<0n) { x=-x; y=-y; }
  return x<=0n ? (x/y) : ((x-1n)/y)+1n;
}




// MODULO
// ------

/**
 * Find the remainder of x/y with sign of x (truncated division).
 * @param x dividend
 * @param y divisor
 */
export function rem(x: bigint, y: bigint): bigint {
  return x % y;
}


/**
 * Find the remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 */
export function mod(x: bigint, y: bigint): bigint {
  return x - y*floorDiv(x, y);
}


/**
 * Find the remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 */
export function modp(x: bigint, y: bigint): bigint {
  return x - abs(y)*floorDiv(x, abs(y));
}




// ROOT
// ----

function sqrtPos(x: bigint): bigint {
  const initialGuess = 1n << (log2(x) / 2n + 1n);
  var a = initialGuess, b = a+1n;
  while (a<b) {
    b = a;
    a = (b + x/b)/2n;
  }
  return b;
}

/**
 * Find the square root of a bigint.
 * @param x a bigint
 */
export function sqrt(x: bigint): bigint {
  if (x===0n) return 0n;
  else return x>0n? sqrtPos(x) : null;
}


/**
 * Find the cube root of a bigint.
 * @param x a bigint
 */
export function cbrt(x: bigint): bigint {
  return root(x, 3n);
}


function rootPos(x: bigint, n: bigint): bigint {
  const initialGuess = 1n << ((log2(x) / n) + 1n);
  if (initialGuess === 2n) {
    return 1n;
  }
  var a = initialGuess, b = a+1n, m = n-1n;
  while(a<b) {
    b = a;
    a = (m*b + x/b**m)/n;
  }
  return b;
}

/**
 * Find the nth root of a bigint.
 * @param x a bigint
 * @param n nth root (1n)
 */
export function root(x: bigint, n: bigint=1n): bigint {
  if (x===0n) return 0n;
  else if (x>0n) return rootPos(x, n);
  else return n % 2n!==0n? -rootPos(-x, n) : null;
}




// FACTORS
// -------

// Find the greatest common divisor of a pair of bigints.
function gcdPair(x: bigint, y: bigint): bigint {
  while (y!==0n) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
// - https://en.wikipedia.org/wiki/Euclidean_algorithm

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




// LOGARITHM
// ---------

/**
 * Find the base-2 logarithm of a value.
 * @param x a bigint
 */
export function log2(x: bigint): bigint {
  var n = x.toString(2).length;
  return x>0n? BigInt(n-1) : null;
}


/**
 * Find the base-10 logarithm of a value.
 * @param x a bigint
 */
export function log10(x: bigint): bigint {
  var n = x.toString(10).length;
  return x>0n? BigInt(n-1) : null;
}




// GEOMETRY
// --------

/**
 * Find the length of hypotenuse.
 * @param xs lengths of perpendicular sides
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
 */
export function sum(...xs: bigint[]): bigint {
  var a = 0n;
  for(var x of xs)
    a += x;
  return a;
}


/**
 * Find the product of bigints (∏).
 * @param xs bigints
 */
export function product(...xs: bigint[]): bigint {
  var a = 1n;
  for(var x of xs)
    a *= x;
  return a;
}


/**
 * Find the smallest bigint.
 * @param xs bigints
 */
export function min(...xs: bigint[]): bigint {
  return range(...xs)[0];
}


/**
 * Find the largest bigint.
 * @param xs bigints
 */
export function max(...xs: bigint[]): bigint {
  return range(...xs)[1];
}


/**
 * TODO: Find the smallest and largest value.
 * @param xs bigints
 * @returns [smallest, largest]
 */
export function range(...xs: bigint[]): [bigint, bigint] {
  var a = xs[0]||null, b = a;
  for (var x of xs) {
    a = a<x? a : x;
    b = b>x? b : x;
  }
  return [a, b];
}




// MEAN
// ----

/**
 * Find the arithmetic mean of bigints.
 * @param xs bigints
 */
export function arithmeticMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  return sum(...xs)/X;
}


/**
 * Find the geometric mean of bigints.
 * @param xs bigints
 */
export function geometricMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  return root(product(...xs), X);
}


/**
 * Find the harmonic mean of bigints.
 * @param xs bigints
 */
export function harmonicMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var p = product(...xs), q = 0n;
  for (var x of xs)
    q += p/x;
  return X*p/q;
}


/**
 * Find the quadriatic mean of bigints.
 * @param xs bigints
 */
export function quadriaticMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var a = 0n;
  for (var x of xs)
    a += x*x;
  return sqrt(a/X);
}
export {quadriaticMean as rootMeanSquare};


/**
 * Find the cubic mean of bigints.
 * @param xs bigints
 */
export function cubicMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var a = 0n;
  for (var x of xs)
    a += x**3n;
  return cbrt(a/X);
}
