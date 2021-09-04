/**
 * Checks if value is a BigInt.
 * @param x a avlue
 */
function is(x: any): boolean {
  return typeof x === 'bigint';
}
export default is;
