/*.....................getting library arraysLib from arrayAssignment....................*/
const library = require('../arrayPractices/arrayAssignment2/arraysLib.js');

/*..............display test report..............*/
const repeatCharacter = function(character,times){
  let characters = new Array(times).fill(character);
  return characters.join("").toString();
}

const justify = function(text){
  let times = Math.floor((100 - text.length)/2); 
  prefix = repeatCharacter(".",times);
  suffix = (prefix+repeatCharacter(".",library.isEven(text.length)));
  return prefix+text+suffix;
}

const display = function(text){
  let message = justify(text);
  return ("|"+message+"|");
}

exports.display = display;

/*......................odd and even Numbers.............*/
const isEven = function(number){
  return number % 2 == 0 ? 1 : 0;
}

const isOdd = function(number){
  return number % 2;
}
const filterEvenOdd = function(numbers){
  let partitionNumbers = [];
  partitionNumbers.push(numbers.filter(isEven));
  partitionNumbers.push(numbers.filter(isOdd));
  return partitionNumbers;
}

exports.filterEvenOdd = filterEvenOdd;

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

/*.............largest and lowest of an array.................*/
const large = function(firstNumber,secondNumber){
  return Math.max(firstNumber,secondNumber);
}

const small = function(firstNumber,secondNumber){
  return Math.min(firstNumber,secondNumber);
}

const largestLowestElement = function(numbers){
  let lowest = numbers.reduce(small);
  let largest = numbers.reduce(large);
  return [lowest,largest];
}

exports.largestLowestElement = largestLowestElement;

/*................Average of an array................*/
const averageArray = function(numbers){
  return (getSum(numbers)/numbers.length);
}

exports.averageArray = averageArray;

/*................Mapping word length.............*/
const getLength = function(lengths,word){
  let value = word.length;
  lengths.push(value);
  return lengths;
}

const mapLength = function(words){
  return words.reduce(getLength,[]);
}

exports.mapLength = mapLength;

/*.............count even and odd numbers...................*/
const oddCount = function(count,number){
  count += isOdd(number);
  return count;
}

const evenCount = function(count,number){
  count += isEven(number);
  return count;
}

const countEvenOdd = function(numbers){
  let evenOddCount = [];
  evenOddCount.push(numbers.reduce(evenCount,0));
  evenOddCount.push(numbers.reduce(oddCount,0));
  return evenOddCount;
}

exports.countEvenOdd = countEvenOdd;

/*............partition by threshold................*/
const isLarge = function(number,threshold){
  return number>threshold? 1 : 0 ;
}

const partition = function(numbers,threshold){
  const aboveBelow = function(partitionArray,number){  
    partitionArray[isLarge(number,threshold)].push(number);
    return partitionArray;
  }
  return numbers.reduce(aboveBelow,[[],[]]);
}

exports.partition = partition;

/*................find the second element of an array...............*/
const secondElement = function(numbers,nthValue){
  let count = -1;
  const isNthElement = function(number){ 
    count ++;
    return (count % nthValue == 0);
  }
  return numbers.filter(isNthElement);
}

exports.secondElement = secondElement;
