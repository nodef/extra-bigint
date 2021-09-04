import log2 from './log2';

function sqrtPos(x: bigint): bigint {
  const initialGuess = 1n << (log2(x) / 2n + 1n);
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
