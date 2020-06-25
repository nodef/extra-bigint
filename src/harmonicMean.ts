import product from './product';

/**
 * Gives harmonic mean of values.
 * @param xs bigints
 */
function harmonicMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var p = product(...xs), q = 0n;
  for(var x of xs)
    q += p/x;
  return X*p/q;
}
export default harmonicMean;
