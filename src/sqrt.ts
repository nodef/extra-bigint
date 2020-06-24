/**
 * Gives square root of value.
 * @param x a bigint
 */
function sqrt(x: bigint): bigint {
  if(x<0n) return null;
  if(x===0n) return 0n;
  var a = x, b = x+1n;
  while(a<b) {
    b = a;
    a = (b + x/b)/2n;
  }
  return b;
}
export default sqrt;
