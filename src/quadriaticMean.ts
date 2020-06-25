import sqrt from './sqrt';

/**
 * Gives quadriatic mean of values.
 * @param xs bigints
 */
function quadriaticMean(...xs: bigint[]): bigint {
  var X = BigInt(xs.length);
  var a = 0n;
  for(var x of xs)
    a += x*x;
  return sqrt(a/X);
}
export default quadriaticMean;
