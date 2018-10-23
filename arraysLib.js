/*.....................getting library arraysLib from arrayAssignment....................*/
const library = require('../arrayPractices/arrayAssignment2/arraysLib.js');

/*.................odd Numbers......................*/
const filterOdd = function(numbers){
  return numbers.filter(library.isEven);
}

exports.filterOdd = filterOdd;

/*......................even Numbers.............*/
const isEven = function(number){
  if(number % 2 == 0){
    return 1;
  }else {
    return 0;
  }
}

const filterEven = function(numbers){
  return numbers.filter(isEven);
}

exports.filterEven = filterEven;

/*.................sum of elements of an array..............*/
const getSum = function(numbers){
  return numbers.reduce(library.add,0);
}

exports.getSum = getSum;

/*.................reverse..............*/
const pushToBeginning = function(array,number){
  array.unshift(number);
  return array;
}

const reverse = function(numbers){
  return numbers.reduce(pushToBeginning,[]);
}

exports.reverse = reverse;

/*.............largest of an array.................*/
const large = function(firstNumber,secondNumber){
  return Math.max(firstNumber,secondNumber);
}

const largestElement = function(numbers){
  return numbers.reduce(large);
}

exports.largestElement = largestElement;

/*...................smallest element of an array...............*/
const small = function(firstNumber,secondNumber){
  return Math.min(firstNumber,secondNumber);
}

const smallestElement = function(numbers){
  return numbers.reduce(small);
}

exports.smallestElement = smallestElement;

/*................Average of an array................*/
const averageArray = function(numbers){
  return (getSum(numbers)/numbers.length);
}

exports.averageArray = averageArray;
