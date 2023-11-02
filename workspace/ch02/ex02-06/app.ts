import type { Data } from './math';
import MyMath from './math.js'
import { sum, substract } from './math.js'

var data: Data = {
  a: 10,
  b: 20
}

console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));

console.log(2, sum(data));
console.log(2, substract(data));


