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

Here new properties will be added and when you check the object it will have age and location added with the name property.

### Deleting properties of an object :

To Delete a property of an object we can make use of the delete operator.

```
let person = {
name: "Suraj",
gender: "Male",
age: 25
};
delete person.age;
console.log(person);
```

Here the age property will be deleted and when you console log it will only show name and gender

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

## Why and WHy to use objects :

1. It can be used to group similar data of an object and could be used to check individual data out of it

```
// Object representing a person
let employee = {
  name: 'Suraj',
  age: 25,
  gender: 'Male',
  address: {
    city: 'Mumbai',
    country: 'India'
  }
};

console.log(employee.name);
console.log(employee.address.city);

```

2. Can be used to run multiple similar functionality under one object. Helps to write cleaner code.

```
let calculate = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculate.add(5, 3));
console.log(calculate.subtract(10, 4));
```

## How to use objects

```
let name = suraj;
let age = 24;
let city = Mumbai

// Example of how to use objects
const person = {
    name : 'suraj',
    age : 24,
    city : 'Mumbai'
}
```

In this example instead of writing multiple variables we can group all the variables together if they're related to each other.

## Related Links
