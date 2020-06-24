import abs from './abs';
import sqrt from './sqrt';

/**
 * Checks if value is prime.
 * @param x a bigint
 */
function isPrime(x: bigint): boolean {
  x = abs(x);
  // 2, 3 are prime
  if(x<=3n) return x>1n;
  // multiples of 2, 3 not prime
  if(x % 2n===0n || x % 3n===0n) return false;
  // factor of 6k-1 or 6k+1 => not prime
  for(var i=6n, I=sqrt(x)+1n; i<=I; i+=6n)
    if(x % (i-1n)===0n || x % (i+1n)===0n) return false;
  return true;
}
export default isPrime;
