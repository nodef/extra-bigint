/**
 * Gives smallest value.
 * @param xs bigints
 */
function min(...xs: BigInt[]): BigInt {
  var a = null;
  for(var x of xs)
    a = a<x? a : x;
  return a;
}
export default min;
