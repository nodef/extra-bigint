import abs from './abs';

/**
 * Gets remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 */
function modp(x: bigint, y: bigint): bigint {
  return x - abs(y)*(x/abs(y));
}
export default modp;
