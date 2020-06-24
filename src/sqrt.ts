/**
 * Gives square root of value.
 * @param x a bigint
 */
function sqrt(x: bigint): bigint {
  if(x<0n) return null;
  var a = x, b = 0n, c = 0n;
  while(a>0n && a!==c) {
    c = b; b = a;
    a = (b + (x-1n)/b)/2n;
  }
  return a;
}
export default sqrt;
