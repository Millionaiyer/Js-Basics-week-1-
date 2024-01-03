// Only Run 1 EXAMPLE AT A TIME
// EXAMPLE OF GLOBAL SCOPE

var a = 10; // Global Scope
var b = 20; // Global Scope
var c; // Global Scope

const abc = () => {
  return (c = a + b); // variables can be accessed inside of a function scope since they are declared in the global scope
};

console.log(abc()); // output

// EXAMPLE OF FUNCTION / LOCAL SCOPE

const pqr = () => {
  const a = 10; // function / local scope scope
};
console.log("a : ", a); // here the variable throws an error since it cannot be accessed outside of the function/local scope

// EXAMPLE OF BLOCK SCOPE
const increment = () => {
  if (true) {
    let count = 10; // block scope
    const add = 20; //block scope
  }
};
cosole.log("count:", count, "add:", add); // Here the count and add cannot be accessed since they are inside of the block scope

// EXAMPLE OF BLOCK SCOPE
const decrement = () => {
  if (true) {
    var counting = 10; // Block scope
  }
  cosole.log("counting :", counting); // here the variable counting is accessbile outside the block scope because var isn't block scoped it only works for let and count like the previous example.
};
