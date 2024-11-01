// Oru array input aai eduth, avayile numbers nte maathram sum kandu pidikkuchu thirike tharunna oru function ezhuthuka.
// Note: array il numbers maathram alla, string, or objects may also be present. Avayil, numbers nte maathram sum aanu kandu pidikkendeth.

const values = [1, "2", "swdf", { me: "hello" }, 23, "niju", 1, ["dadf"], 8];

const getSum = (arr) => {
  let sum = 0;
  arr.map((item) => {
    if (typeof item === "number") {
      sum += item;
    }
  });
  return sum;
};

const getSumTwo = (arr) => {
  const sum = arr.reduce((c, item) => {
    if (typeof item === "number") {
      c += item;
    }
    return c;
  });
  return sum;
};

const sum = getSum(values);
const sumTwo = getSumTwo(values);

console.log(sum);
console.log(sumTwo);
