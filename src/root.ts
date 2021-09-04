function rootPos(x: bigint, n: bigint): bigint {
  const initialGuess = 1n << BigInt(Math.ceil(x.toString(16).length * 4 / Number(n)));
  if (initialGuess === 2n) {
    return 1n;
  }
  var a = initialGuess, b = a+1n, m = n-1n;
  while(a<b) {
    b = a;
    a = (m*b + x/b**m)/n;
  }
  return b;
}

/**
 * Gives nth root of value.
 * @param x a bigint
 * @param n nth root (1n)
 */
function root(x: bigint, n: bigint=1n): bigint {
  if(x===0n) return 0n;
  else if(x>0n) return rootPos(x, n);
  else return n % 2n!==0n? -rootPos(-x, n) : null;
}
export default root;
