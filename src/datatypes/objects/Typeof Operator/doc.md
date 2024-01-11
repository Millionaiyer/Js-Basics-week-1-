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
