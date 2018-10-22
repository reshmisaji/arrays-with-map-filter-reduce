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
