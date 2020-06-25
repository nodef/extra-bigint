/**
 * Gets remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 */
function mod(x: bigint, y: bigint): bigint {
  return x - y*(x/y);
}
export default mod;
