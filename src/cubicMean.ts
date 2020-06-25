import cbrt from './cbrt';

/**
 * Gives cubic mean of values.
 * @param xs bigints
 */
function cubicMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var a = 0n;
  for(var x of xs)
    a += x**3n;
  return cbrt(a/X);
}
export default cubicMean;
