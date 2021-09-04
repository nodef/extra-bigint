function sqrtPos(x: bigint): bigint {
  const initialGuess = 1n << BigInt(x.toString(16).length * 2);
  var a = initialGuess, b = a+1n;
  while(a<b) {
    b = a;
    a = (b + x/b)/2n;
  }
  return b;
}

/**
 * Gives square root of value.
 * @param x a bigint
 */
function sqrt(x: bigint): bigint {
  if(x===0n) return 0n;
  else return x>0n? sqrtPos(x) : null;
}
export default sqrt;
