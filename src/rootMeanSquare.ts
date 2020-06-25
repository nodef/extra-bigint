import quadriaticMean from './quadriaticMean';

/**
 * Gives quadriatic mean of values.
 * @param xs bigints
 */
function rootMeanSquare(...xs: bigint[]): bigint {
  return quadriaticMean(...xs);
}
export default rootMeanSquare;
