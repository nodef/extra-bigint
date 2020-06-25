/**
 * Gives base-10 logarithm of value.
 * @param x a bigint
 */
function log10(x: bigint): bigint {
  var n = x.toString(10).length;
  return x>0n? BigInt(n-1) : null;
}
export default log10;
