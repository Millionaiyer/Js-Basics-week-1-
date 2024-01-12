## Typeof operator

### Primitive values

The `typeof` Operator returns a string indicating the type of operand value

```
console.log(typeof 'blubber'); // returns string
console.log(typeof 42); // returns number
console.log(typeof true); // returns boolean
console.log(typeof undeclaredVariable); // returns undefined
console.log(typeof null) // returns object
```

In this example it's easy to tell what kind of operand because they are primitive values

### Reference type values

```
const person = {
    name: 'suraj',
    age: 24
}

let arr = [1,2,3,4,5]

console.log(typeof(person)) // returns object
console.log(typeof(arr)) // returns object

```

Here in this example we take the value of two reference types of datatypes where object is called as object but also arrays are called objects.

### WHY HOW AND WHEN TO USE

The `typeof` Operator returns a string indicating the type of operand value hence it is mostly used in cases tying to check what type of operand it is.

```
let abc = "string";

if (typeof abc === "string") {
  console.log("true");
} else {
  console.log("false");
}
```

It can also be used in block statements like If - Else to return a value depening on the requirement.

## Reference Links

[typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

[typeof Operator live example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_typeof_all)
