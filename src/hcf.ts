import gcd from './gcd';

/**
 * Gives highest common factor of values.
 * @param xs bigints
 */
function hcf(...xs: bigint[]): bigint {
  return gcd(...xs);
}
export default hcf;
