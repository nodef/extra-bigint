import gcd from './gcd';
import product from './product';

/**
 * Gives least common multiple of values.
 * @param xs bigints
 */
function lcm(...xs: bigint[]): bigint {
  return product(...xs)/gcd(...xs);
}
export default lcm;
