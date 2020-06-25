import sum from './sum';

/**
 * Gives arithmetic mean of values.
 * @param xs bigints
 */
function arithmeticMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  return sum(...xs)/X;
}
export default arithmeticMean;
