// Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.

const users = [
  {
    id: 1,
    name: "arun",
    age: 21,
  },
  {
    id: 2,
    name: "kiran",
    age: 18,
  },
  {
    id: 3,
    name: "argun",
    age: 15,
  },
  {
    id: 4,
    name: "fasal",
    age: 24,
  },
  {
    id: 5,
    name: "nivath",
    age: 20,
  },
  {
    id: 6,
    name: "riay",
    age: 28,
  },
  {
    id: 7,
    name: "roy",
    age: 18,
  },
];
const minimumAge = 20;

const filterByAge = (arr, minAge) => {
  const data = arr.filter((user) => user.age >= minAge);
  return data;
};

const data = filterByAge(users, minimumAge);

console.log(data);
