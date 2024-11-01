// Oru array of numbers input aai eduth, athile duplicate items remove cheithu return cheyyunna oru function ezhuthuka.
// Ex: console.log(removeDuplicates([1,1,2])) should print [1,2]

const values = [1, 2, 3, 4, 2, 2, 1, 4, 13, 2, 4, 5];

const removeDuplicates = (arr) => {
  let outPut = [];
  arr.map((value) => {
    if (!outPut.includes(value)) {
      outPut.push(value);
    }
  });
  return outPut;
};

const output = removeDuplicates(values);

console.log(output);
