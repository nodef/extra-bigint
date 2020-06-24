/**
 * Gives largest value.
 * @param xs bigints
 */
function max(...xs: BigInt[]): BigInt {
  var m = null;
  for(var x of xs)
    m = m>x? m : x;
  return m;
}
export default max;
