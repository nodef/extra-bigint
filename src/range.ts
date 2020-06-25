/**
 * Gives smallest and largest value.
 * @param xs bigints
 * @returns [smallest, largest]
 */
function range(...xs: bigint[]): [bigint, bigint] {
  var a = xs[0]||null, b = a;
  for(var x of xs) {
    a = a<x? a : x;
    b = b>x? b : x;
  }
  return [a, b];
}
export default range;
