import range from './range';

/**
 * Gives largest value.
 * @param xs bigints
 */
function max(...xs: bigint[]): bigint {
  return range(...xs)[1];
}
export default max;
