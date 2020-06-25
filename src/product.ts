/**
 * Gives product of values (∏).
 * @param xs bigints
 */
function product(...xs: bigint[]): bigint {
  var a = 1n;
  for(var x of xs)
    a *= x;
  return a;
}
export default product;
