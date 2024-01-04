let id = Symbol(1); // symbol id
let id2 = Symbol(1); // symbol id2

console.log(id === id2); // false because symbols are unique in nature

let employee = {
  [id]: 1,
  Name: "Aiyer",
  Age: 25,
};

console.log(Object.keys(employee)); // here symbol id is hidden you'll only get Name and Age as keys

console.log(typeof id); // the output is a Symbol
