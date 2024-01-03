// Variable Hoisiting

console.log("a :", a); // here the variable a is hoisted but the value cannot be accessed hence it is undefined

// console.log("b:", b, "c:", c);
// here the variable b and c isn't hoisted so it throws an error saying  Cannot access 'b' and 'c' before initialization
var a = 10;
// let b = 10;
// const c = 10;

// Function Hoisting

console.log("addition of two numbers is :", add(10, 15)); // here the function with the keyword function is hoisted to the top of its scope
console.log("substraction of two numbers is: ", subtract(15, 10)); // here the arorw function isn't hoisted and throws an error of Uncaught ReferenceError: Cannot access 'subtract' before initialization
console.log("division of two numbers is : ", divide(6, 3)); // here the function expression isn't hoisted and throws an error of Uncaught ReferenceError: Cannot access 'divide' before initialization

function add(a, b) {
  return a + b;
}

const divide = function (a, b) {
  return a * b;
};

const subtract = (a, b) => {
  return a + b;
};
