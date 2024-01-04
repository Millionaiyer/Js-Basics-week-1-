#Object

## What is an Object

An **Object** is a reference datatype. An object can be created with figure brackets {…} with an optional list of properties. A property is a "key:value" pair, where **Key** is a string or could be a symbol since(Es6) and value can be anything.

```
let id = Symbol('id')

let person = {
    [id] : 2,
    name: 'Aiyer',
    Age: 24
}

console.log(person)
```

An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object.

```
let person = {
	name: 'Suraj',
	age: 25,
	displayInfo: function () {
		console.log(`${person.name} is and his age is
			${person.age} `);
	}
}
console.log(person.displayInfo());

```

### Adding properties to an object :

You can add properties to an object by using object.key = value

```
let person = {
  name: "Suraj",
};

person.age = 24;
person.location = "Mumbai";
console.log(person);

```

### Deleting properties of an object :

To Delete a property of an object we can make use of the delete operator.

### Accessing Properties:

Properties are accessible using (.) dot notation and using ([]) bracket notation ,but if its a symbol you use bracket notation instead.

```
let id = Symbol('id')

let person = {
    [id] : 2,
    name: 'Aiyer',
    Age: 24
}


console.log(person.name)
console.log(person[name])
console.log(person[id])

```
