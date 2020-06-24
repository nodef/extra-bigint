/**
 * Gives sign of value.
 * @param x a bigint
 * @returns +ve: 1n, -ve: -1n, 0: 0n
 */
function sign(x: BigInt): BigInt {
  return x<0n? -1n : (x>0n? 1n : 0n);
}
export default sign;
