# Symbol

# what is a Symbol

#### A symbol is a primitive data type that is initialized with the `Symbol` keyword and you could also have a string inside it's parenthesis (). It is bascially to identify the Symbol.

```
let id = Symbol(1) or
let name = Symbol('Aiyer')
```

#### Symbols are unique in nature even though they're primitive Symbol 1 != symbol 2

```
let id = Symbol(1);
let id2 = Symbol(1);

console.log(id === id2)

```

The output of the code would be false since symbols are unique in nature.

#### Symbols are also somewhat hidden in nature

```
let id = Symbol(1);

let employee = {
    [id] : 1,
    Name: 'Aiyer',
    Age : 25
}

console.log(Object.keys(employee))
```

Here we use the same symbol inside of the Object but to use that we need to put the variable inside []. Also when we console.log the keys we would only find Name and Age and the id would be hidden. This is also one of the use case of a Symbol.

#### Typeof Symbol is always a Symbol

```
let id = Symbol(1);
console.log(typeof id)
```
