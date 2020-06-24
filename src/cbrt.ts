import root from './root';

/**
 * Gives cube root of value.
 * @param x a bigint
 */
function cbrt(x: bigint): bigint {
  return root(x, 3n);
}
export default cbrt;
