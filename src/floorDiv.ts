/**
 * Gives value ≤ x/y.
 * @param x dividend
 * @param y divisor
 */
function floorDiv(x: bigint, y: bigint): bigint {
  if(y<0n) { x=-x; y=-y; }
  return x>=0n ? (x/y) : ((x+1n)/y)-1n;
}
export default floorDiv;
