/**
 * Gives absolute value.
 * @param x a bigint
 */
function abs(x: bigint): bigint {
  return x<0n? -x as any : x;
}
export default abs;
