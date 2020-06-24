/**
 * Gives largest value.
 * @param xs bigints
 */
function max(...xs: bigint[]): bigint {
  var a = null;
  for(var x of xs)
    a = a>x? a : x;
  return a;
}
export default max;
