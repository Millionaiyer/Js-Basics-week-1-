# Variable Scope

## What is a variable scope

**Variable scope** basically means how the variable can be used in a set of code. Where will it be accessed and how a certain scope changes on how the variable is executed.

## Types of Scopes

### Global Scope :

Global scope basically means once the variable is declared in the global scope it can be accessed anywhere in the code.

```
var a = 10;
var b = 20;
var c;

const abc = () => {
    return c = a + b;
}

console.log(abc())
```

Here the variable a ,b and c are accessed from the global scope inside of a abc() function.

### Local / Function Scope :

**Local/Function scope** basically means the variable can only be accessed in the function or local scope it cannot be accessed outside of that scope

```
const abc = () => {
    const a = 10;

}
console.log(a);

```

Here the variable is declared inside of a function and is trying to be accessed outside of the function scope. Since it is in the function scope it cannot be accessed outside. It will throw an error `undefined` when we try to access it outside of the scope.

### Block Scope :

**Block scope** bascially means the scope in between 2 {} brackets something like an if - else statement. So it means variables inside this scope cannot be accessed outside of the scope.

```
const increment =() => {
    if(true){
     let count = 10;
     const add = 20;
    }
    cosole.log(count,add)
}
```

Here count is created inside of the **_If block_** hence it is not accessible outside of the if block.
Block scope only works for

```
const increment =() => {
    if(true){
     var count = 10;
    }
    cosole.log(count)
}
```

But Here var can be accessed outside of the block scope. It doesn't follow the rule of block scope and can be accessed outside of the block scope in the local or function scope.

## Why , How or When do we use variable Scope

There is no why , how or when to use variable scope , we do not decide to use the scope of the variable it decides on it's own based on where it is created. To understand how it works you can access the examples above.

## Reference Link

[Variable Scope](https://www.w3schools.com/js/js_scope.asp)

[Variable scope](https://www.programiz.com/javascript/variable-scope)
