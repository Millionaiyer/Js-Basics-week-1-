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
const c = 10;
```

Here the output of the code throws an `error` because let and const isn't hoisted like var or that is what we would think.so the complier throws an error saying the variable is trying to be executed before inintialization.

Let and const are actually hoisted but in a different way.

```
console.log(b)

let c = 10
```

here when we run the code the error is thrown that ReferenceError: b is not defined. The difference is that in the previous example it shows ReferenceError: Cannot access 'b','c' before initialization while in this example it is just saying b is not defined, which is true because we haven't defined it.

This basically proves that the javascript knows about the b so it bascially means b is hoisted to the top but the difference between var and let and const is , when Var is hoisted to the top it is hoisted with a default initialization of `undefined` while let and const are initialized without a default initialization.

## Why , How and When to use Variable hoisting :

Hoisiting isn't something you use on your own. You just need to know the concept and there is no why how or when to use hoisting. It just happens with a certain function or a variable. You can understand with the help of the above example.

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

## Why and How to use Function hoisting :

Function hoisting is useful because we can hide function implementation farther down in the file and let the reader focus on what the code is doing.

```
addingTwoNumbers(10,20)
substractingTwoNumbers(20,10)

function addingTwoNumbers(a, b) {
  return a + b;
}

const substractingTwoNumbers = (a, b) => {
  return a + b;
};

```

here we come to know what the code is doing before even reading what it's implementation is.

## When to use Function Hoisting :

We can use function hoisting when we want to tell the users or the developer what the code is doing before going through the whole set of lines of code like the example above.

## Reference Links

[Hoisting Video](https://www.youtube.com/watch?v=EvfRXyKa_GI)

[Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

[Hoisting with let and const](https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/#:~:text=As%20I%27ve%20explained%20in,a%20default%20initialization%20of%20undefined%20)
