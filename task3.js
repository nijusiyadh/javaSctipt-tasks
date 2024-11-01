// Largest value kandu pidikkuka. Oru array of numbers input aai eduth, athile largest number kandu pidich thirike tharunna function ezhuthuka.

const values = [2, 8, 23, 4, 1111, 555, 21, 513, 663, 22];

const getLargestNumber = (arr) => {
  let largest = 0;
  arr.map((value) => {
    if (value > largest) {
      largest = value;
    }
  });
  return largest;
};

const getLargestNumberTwo = (arr) => {
  const largest = arr.reduce((l, value) => {
    if (value > l) {
      l = value;
    }
    return l;
  });
  return largest;
};

const largest = getLargestNumber(values);
const largestTwo = getLargestNumberTwo(values);

console.log(largest);
console.log(largestTwo);
