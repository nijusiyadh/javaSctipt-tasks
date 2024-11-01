// Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
// (Hint: Use array sorting methods)

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

const sortByName = (arr) => {
  return arr.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
};

const sorted = sortByName(users);

console.log(sorted);
