import geometricMean from './geometricMean';
import root from './root';

/**
 * Gives generalized mean of values.
 * @param xs bigints
 */
function mean(xs: bigint[], p: bigint=1n): bigint {
  if(p===0n) return geometricMean(...xs);
  var X = BigInt(xs.length);
  var a = 0n;
  for(var x of xs)
    a += x**p;
  return root(a/X, p);
}
export default mean;
