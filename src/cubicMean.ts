import cbrt from './cbrt';

/**
 * Gives cubic mean of values.
 * @param xs bigints
 */
function cubicMean(...xs: bigint[]): bigint {
  var a = 0n;
  for(var x of xs)
    a += x**3n;
  return cbrt(a);
}
export default cubicMean;
