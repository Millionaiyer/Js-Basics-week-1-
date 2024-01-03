# Hoisting

Hoisiting is the process in which the variables or functions are moved to the top of their scope before the execution of the code.

## Variable Hoisting

**Variable hoisting** is when the variable is pushed to the top of their scope.

```
console.log(a);
var a = 10;
```

here the output of the code is `undefined` because here the variable has been initialized but the value of the variable will only work when it's being executed

```
console.log(b,c);
let b = 10;
let c = 10;
```

Here the output of the code throws an `error` because let isn't hoisted like var so the complier throws an error saying the variable is trying to be executed before inintialization.

Let and const cannot be hoisted only Var is hoisted.

## Function Hoisting

**Function hoisting** is when the variable is pushed to the top of their scope.
Any function that starts with the **"Function"** keyword is hoisted to the top of their scope but it doesn't work for functions like arrow functions or function expressions.

```
console.log("addition of two numbers is :", add(10, 15));

console.log("substraction of two numbers is: ", subtract(15, 10));

console.log("division of two numbers is : ", divide(6, 3))

function add(a, b) {
  return a + b;
}

const divide = function (a, b) {
  return a * b;
};


const subtract = (a, b) => {
  return a + b;
};
```

here the function starting with the keyword function is hoisted to the top of its scope while the arrow function and function expression aren't hoisted and throws an error : Uncaught ReferenceError Cannot access before initialization.

## Why , How and When to use hoisting :

Hoisiting isn't something you use on your own. You just need to know the concept and there is no why how or when to use hoisting. It just happens with a certain function or a variable. You can understand with the help of the above example.

## Reference Links

[Hoisting Video](https://www.youtube.com/watch?v=EvfRXyKa_GI)

[Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
