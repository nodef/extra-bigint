/**
 * Gives value ≤ x/y.
 * @param x dividend
 * @param y divisor
 */
function floorDiv(x: bigint, y: bigint): bigint {
  var a = x/y;
  if(y<0n) { x=-x; y=-y; }
  return x >= a*y? a : a-1n;
}
export default floorDiv;
