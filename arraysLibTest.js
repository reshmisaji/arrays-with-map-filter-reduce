/*..................Setting referense for assert object as assert...........*/
const assert = require('assert');
const library = require('./arraysLib.js');

/*................filter odd numbers...........*/
const filterOdd = library.filterOdd;

assert.deepEqual(filterOdd([1]),[1]);
assert.deepEqual(filterOdd([2]),[]);
assert.deepEqual(filterOdd([1,2]),[1]);
assert.deepEqual(filterOdd([2,2]),[]);
assert.deepEqual(filterOdd([1,3]),[1,3]);

console.log(".............All tests passed for filtering odd numbers.........");

/*.........filter even numbers..............*/
const filterEven = library.filterEven;

assert.deepEqual(filterEven([1]),[]);
assert.deepEqual(filterEven([2]),[2]);
assert.deepEqual(filterEven([1,2]),[2]);
assert.deepEqual(filterEven([2,2]),[2,2]);
assert.deepEqual(filterEven([1,1]),[]);

console.log("............All tests passed for filtering even numbers............");

/*...................Sum of elements of an array...................*/
const getSum = library.getSum;

assert.deepEqual(getSum([]),0);
assert.deepEqual(getSum([1]),1);
assert.deepEqual(getSum([1,2]),3);
assert.deepEqual(getSum([-2]),-2);

console.log("................All tests passed to calculate the sum of elements of an array..............");
