import abs from './abs';
import floorDiv from './floorDiv';

/**
 * Gets remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 */
function modp(x: bigint, y: bigint): bigint {
  return x - abs(y)*floorDiv(x, abs(y));
}
export default modp;
