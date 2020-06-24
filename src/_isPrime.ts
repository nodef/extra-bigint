/**
 * Checks if value is prime.
 * @param x a bigint
 */
function isPrime(x: BigInt): boolean {
  var x = Math.abs(x);
  // 2, 3 are prime
  if(x<=3) return x>1;
  // multiples of 2, 3 not prime
  if(x % 2===0 || x % 3===0) return false;
  // factor of 6k-1 or 6k+1 => not prime
  for(var i=6, I=Math.sqrt(x)+1; i<=I; i+=6)
    if(x % (i-1)===0 || x % (i+1)===0) return false;
  return true;
}
module.exports = isPrime;
