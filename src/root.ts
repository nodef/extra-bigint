/**
 * Gives nth root of value.
 * @param x a bigint
 * @param n nth root (1n)
 */
function root(x: bigint, n: bigint=1n): bigint {
  var x1 = x - 1n, n1 = n - 1n;
  var a = x, b = 0n, c = 0n;
  while(a>0n && a!==c) {
    c = b; b = a;
    a = (n1*b + x1/b**n1)/n;
    console.log('a', a);
  }
  return a;
}
export default root;
// TODO
