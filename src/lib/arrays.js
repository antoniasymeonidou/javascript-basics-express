/* eslint-disable no-plusplus */
const getNthElement = (index, array) => {
  return array[index%array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(x => x.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(function(val){return val%2===0});
};

const removeNthElement2 = (index, array) => {
  return array.filter(e => (e !== array[index]));
};

const elementsStartingWithAVowel = strings => {
  const results = []
  for (let i = 0; i < strings.length; i++) {
    if ((strings[i].startsWith('a')) || (strings[i].startsWith('A')) || (strings[i].startsWith('e')) || (strings[i].startsWith('E')) || (strings[i].startsWith('i')) || (strings[i].startsWith('I')) || (strings[i].startsWith('o')) || (strings[i].startsWith('O')) || (strings[i].startsWith('u')) || (strings[i].startsWith('U'))) {
      results.push(strings[i])
    }
  }
  return results;
};

const removeSpaces = string => {
  return string.split(" ").join(""); 
};

const sumNumbers = numbers => {
  return numbers.reduce((sum, currentValue) => sum + currentValue);
};

const sortByLastLetter = strings => {
  return strings.sort((stringA, stringB) => { 
    const lastCharFromA = stringA.charCodeAt(stringA.length -1);
    const lastCharFromB = stringB.charCodeAt(stringB.length -1);
    return lastCharFromA - lastCharFromB;
});
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
