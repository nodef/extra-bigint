import product from './product';
import root from './root';

/**
 * Gives geometric mean of values.
 * @param xs bigints
 */
function geometricMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  return root(product(...xs), X);
}
export default geometricMean;
