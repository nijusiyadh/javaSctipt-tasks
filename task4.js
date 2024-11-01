// Oru string input aai eduth, athile vowels(a, e, i, o, u) nte enanm count cheithu thirike tharunna oru function ezhuthuka.

const text = "Hola You helloI";

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const characters = str.split("");
  characters.map((char) => {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });

  return count;
};

const count = countVowels(text);
console.log(count);
