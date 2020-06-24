/**
 * Gives smallest value.
 * @param xs bigints
 */
function min(...xs: bigint[]): bigint {
  var a = xs[0]||null;
  for(var x of xs)
    a = a<x? a : x;
  return a;
}
export default min;
