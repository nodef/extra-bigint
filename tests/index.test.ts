import * as vigint from "../src";
import {is}             from "../src";
import {compare}        from "../src";
import {abs}            from "../src";
import {sign}           from "../src";
import {floorDiv}       from "../src";
import {ceilDiv}        from "../src";
import {roundDiv}       from "../src";
import {rem}            from "../src";
import {mod}            from "../src";
import {modp}           from "../src";
import {constrain}      from "../src";
import {remap}          from "../src";
import {lerp}           from "../src";
import {isPow2}         from "../src";
import {isPow10}        from "../src";
import {prevPow2}       from "../src";
import {prevPow10}      from "../src";
import {nextPow2}       from "../src";
import {nextPow10}      from "../src";
import {log2}           from "../src";
import {log10}          from "../src";
import {sqrt}           from "../src";
import {cbrt}           from "../src";
import {root}           from "../src";
import {properDivisors} from "../src";
import {aliquotSum}     from "../src";
import {isPrime}        from "../src";
import {gcd}            from "../src";
import {lcm}            from "../src";
import {factorial}      from "../src";
import {binomial}       from "../src";
import {multinomial}    from "../src";
import {hypot}          from "../src";
import {sum}            from "../src";
import {product}        from "../src";
import {min}            from "../src";
import {max}            from "../src";
import {range}          from "../src";
import {arithmeticMean} from "../src";
import {geometricMean}  from "../src";
import {harmonicMean}   from "../src";
import {quadriaticMean} from "../src";
import {cubicMean}      from "../src";




test("example1", () => {
  var b = vigint.isPrime(113n);
  expect(b).toBe(true);
  // → true

  var a = vigint.floorDiv(7n, 3n);
  expect(a).toBe(2n);
  // → 2n

  var a = vigint.sqrt(81n);
  expect(a).toBe(9n);
  // → 9n

  var a = vigint.lcm(2n, 3n, 4n);
  expect(a).toBe(12n);
  // → 12n

  var a = vigint.log2(8n);
  expect(a).toBe(3n);
  // → 3n

  var a = vigint.sum(1n, 2n, 3n, 4n);
  expect(a).toBe(10n);
  // → 10n

  var a = vigint.mean(1n, 7n, 8n);
  expect(a).toBe(5n);
  // → 5n
});




test("floorDiv", () => {
  var a = floorDiv(7n, 3n);
  expect(a).toBe(2n);
  var a = floorDiv(-7n, 3n);
  expect(a).toBe(-3n);
  var a = floorDiv(7n, -3n);
  expect(a).toBe(-3n);
  var a = floorDiv(-7n, -3n);
  expect(a).toBe(2n);
});


test("sqrt", () => {
  var a = sqrt(81n);
  expect(a).toBe(9n);
  var a = sqrt(99n);
  expect(a).toBe(9n);
});


test("root", () => {
  var a = root(81n, 4n);
  expect(a).toBe(3n);
  var a = root(99n, 4n);
  expect(a).toBe(3n);
});
