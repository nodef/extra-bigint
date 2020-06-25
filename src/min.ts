import range from './range';

/**
 * Gives smallest value.
 * @param xs bigints
 */
function min(...xs: bigint[]): bigint {
  return range(...xs)[0];
}
export default min;
