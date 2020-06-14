const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return negate(either(a, b));
};

const one = (a, b) => {
  return (a && !b) || (!a && b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 !== 0;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  let i = 0;
  for (i = 0; i*i < a; i++);
  return i * i === a;
};

const startsWith = (char, string) => {
 return string.startsWith("a", char);
};

const containsVowels = string => {
  return string.search("[eoiaAEOI]") >= 0;
};

const isLowerCase = string => {
 return string.toLowerCase() === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
