/*..................Setting referense for assert object as assert...........*/
const assert = require('assert');
const library = require('./arraysLib.js');

/*................filter odd numbers...........*/
const oddNumbers = library.oddNumbers;

assert.deepEqual(oddNumbers([1]),[1]);
assert.deepEqual(oddNumbers([2]),[]);
assert.deepEqual(oddNumbers([1,2]),[1]);
assert.deepEqual(oddNumbers([2,2]),[]);
assert.deepEqual(oddNumbers([1,3]),[1,3]);
