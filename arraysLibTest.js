/*..................Setting referense for assert object as assert...........*/
const assert = require('assert');
const library = require('./arraysLib.js');

/*..............display Output....................*/
const display = library.display;
let serialNumber = 0;

const displayTestReport = function(text){
  serialNumber++;
  console.log(serialNumber,display(text));
console.log("\n");
}

/*................filter even and odd numbers...........*/
const filterEvenOdd = library.filterEvenOdd;

assert.deepEqual(filterEvenOdd([1]),[[],[1]]);
assert.deepEqual(filterEvenOdd([2]),[[2],[]]);
assert.deepEqual(filterEvenOdd([1,2]),[[2],[1]]);
assert.deepEqual(filterEvenOdd([2,2]),[[2,2],[]]);
assert.deepEqual(filterEvenOdd([1,3]),[[],[1,3]]);

displayTestReport(".............All tests passed for filtering odd and even numbers.........");

/*...................Sum of elements of an array...................*/
const getSum = library.getSum;

assert.deepEqual(getSum([]),0);
assert.deepEqual(getSum([1]),1);
assert.deepEqual(getSum([1,2]),3);
assert.deepEqual(getSum([-2]),-2);

displayTestReport("................All tests passed to calculate the sum of elements of an array..............");

/*............reverse of numbers....................*/
const reverse = library.reverse;

assert.deepEqual(reverse([]),[]);
assert.deepEqual(reverse([1]),[1]);
assert.deepEqual(reverse([1,2]),[2,1]);

displayTestReport("................All tests passed to reverse an array...........");

/*............largest Of an array....................*/
const largestElement = library.largestElement;

assert.deepEqual(largestElement([1]),1);
assert.deepEqual(largestElement([2,1]),2);

displayTestReport(".................All tests passed for finding the largest number of an array.................");

/*...................smallest of an array................*/
const smallestElement = library.smallestElement;

assert.deepEqual(smallestElement([1]),1);
assert.deepEqual(smallestElement([1,2]),1);

displayTestReport(".........All tests passed for finding the smallest element of an array........");

/*..............Average of an array..................*/
const averageArray = library.averageArray;

assert.deepEqual(averageArray([1]),1);
assert.deepEqual(averageArray([1,2]),1.5);
assert.deepEqual(averageArray([1,2,3]),2);

displayTestReport(".............All tests passed for calculating the average of an array...............");

/*...................Mapping the length of the texts..............*/
const mapLength = library.mapLength;

assert.deepEqual(mapLength([""]),[0]);
assert.deepEqual(mapLength(["a"]),[1]);
assert.deepEqual(mapLength(["ba"]),[2]);
assert.deepEqual(mapLength(["","a"]),[0,1]);

displayTestReport("All tests for map word length is passed");

/*..................Count even and odd numbers......................*/
const countEvenOdd = library.countEvenOdd;

assert.deepEqual(countEvenOdd([]),[0,0]);
assert.deepEqual(countEvenOdd([1]),[0,1]);
assert.deepEqual(countEvenOdd([2]),[1,0]);
assert.deepEqual(countEvenOdd([2,1]),[1,1]);

displayTestReport("All tests for counting even and odd numbers is passed");

/*..............partition by a threshold frequency............*/
const partition = library.partition;

assert.deepEqual(partition([1],1),[[1],[]]);
assert.deepEqual(partition([1,2],1),[[1],[2]]);
assert.deepEqual(partition([1,2,3],2),[[1,2],[3]]);

displayTestReport("All tests for  partitioning the array with a threshold");

/*....................select the second element of an array...................*/
const secondElement = library.secondElement;

assert.deepEqual(secondElement([],2),[]);
assert.deepEqual(secondElement([0],2),[0]);
assert.deepEqual(secondElement([1,2],2),[1]);
assert.deepEqual(secondElement([1,2,3],2),[1,3]);

displayTestReport("All tests for finding every second element of the array passed");

/*................count numbers above and below threshold.......................*/

