// Array sum kandu pidikkuka. Oru array of numbers input aai eduth, avayile ella elements'nteyum sum thirike nalkunna oru function ezhuthuka.

const values = [1, 2, 4, 5, 6, 6, 7];

const getSumOfNumbers = (arr) => {
  return arr.reduce((total, value) => (total += value));
};

const getSumOfNumbersManual = (arr) => {
  let total = 0;
  arr.map((value) => (total += value));
  return total;
};

console.log(getSumOfNumbers(values));
console.log(getSumOfNumbersManual(values));
