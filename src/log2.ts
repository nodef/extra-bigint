/**
 * Gives base-2 logarithm of value.
 * @param x a bigint
 */
function log2(x: bigint): bigint {
  var n = x.toString(2).length;
  return x>0n? BigInt(n-1) : null;
}
export default log2;
