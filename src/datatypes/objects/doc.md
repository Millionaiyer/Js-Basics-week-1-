# Object

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

here you can create a method which is a function inside an object to access it using this keyword

```
let company = {
  name: "flyerssoft",
  location: "Chennai",
  details: function () {
    return console.log(`the company name is ${this.name} and is located in `);
  },
};

console.log(company.details());
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

## How When and Why to use objects :

- It can be used to group similar data of an object and could be used to check individual data out of it

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

- Can be used to run multiple similar functionality under one object. Helps to write cleaner code.

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

### In Operator :

It is possible to access property. The left side of in there must be a property name. That’s usually a string.

```
let obj = {
  test: undefined
};

alert( obj.test );

alert( "test" in obj );
```

In case of undefined when we use object.key and if the value exists as undefined it returns as undefined instead of true, so we don't come to know if the property exists.

Hence when we use key in object and check if the property is true or not.

# For in Loop

This is a special form of loop that uses in inside of for. It bascially checks if the property is true or not.

```
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  alert( key );
  alert( user[key] );
}
```

In this example the `alert(key)` would display all the keys in the object whereas `alert(user[key])` would display all the key values in the object.

## Related Links

[Objects](https://javascript.info/object)
