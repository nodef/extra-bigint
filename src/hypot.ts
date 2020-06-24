import sqrt from './sqrt';

/**
 * Gives length of hypotenuse.
 * @param xs lengths of perpendicular sides
 */
function hypot(...xs: bigint[]): bigint {
  var a = 0n;
  for(var x of xs)
    a += x*x;
  return sqrt(a);
}
export default hypot;
