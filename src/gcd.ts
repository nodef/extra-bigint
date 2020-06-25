function gcdPair(x: bigint, y: bigint): bigint {
  while(y!==0n) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/**
 * Gives greatest common divisor of values.
 * @param xs bigints
 */
function gcd(...xs: bigint[]): bigint {
  var a = xs[0]||1n;
  for(var x of xs.slice(1))
    a = gcdPair(a, x);
  return a;
}
export default gcd;
