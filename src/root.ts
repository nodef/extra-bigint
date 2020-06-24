/**
 * Gives nth root of value.
 * @param x a bigint
 * @param n nth root (1n)
 */
function root(x: bigint, n: bigint=1n): BigInt {
  var n1 = n - 1n;
  var a = x, b = x, c = x;
  do {
    c = b; b = a;
    a = (n1*b + x/(n*b**n1))/n;
  } while(a!==c);
  return a;
}
export default root;
