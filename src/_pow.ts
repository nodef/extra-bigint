function pow(x: bigint, n: number): bigint {
  var p = 1, q = 2, tol = 0.001;
  while(Math.abs(n-(p/q))>tol) {
    var a = p/q;
    if(a<n) { p = p*2+1; q = q*2; }
    else { p = p*2; q = q*2+1; }
  }
  console.log({p, q});
  return 0n;
}
export default pow;
