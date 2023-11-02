// import MyMath, { substract, sum } from './math.js';
import * as MyMath from './math.js';
import { sum as add } from './math.js';

var data = { a: 10, b: 20 };

console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));
console.log(1, add(data));
