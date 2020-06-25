/**
 * Gives sum of values (Σ).
 * @param xs bigints
 */
function sum(...xs: bigint[]): bigint {
  var a = 0n;
  for(var x of xs)
    a += x;
  return a;
}
export default sum;
