/**
 * Compares two values.
 * @param x a bigint
 * @param y another bigint
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare(x: bigint, y: bigint): bigint {
  return x<y? -1n : (x>y? 1n : 0n);
}
export default compare;
