/*.....................Odd Numbers....................*/
const isOdd = function(number){
  return number%2;
}

const oddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

exports.oddNumbers = oddNumbers;
