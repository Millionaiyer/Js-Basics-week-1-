// Method 1

let ab = {
  name2: "suraj",
  age: 24,
};

let pq = {
  run: () => {
    alert("hello");
  },
};

ab.__proto__ = pq; // pq becomes a prototype of ab

pq.__proto__ = {
  name: "jackie",
};
ab.run();
console.log(ab.name); // here ab doesn't have name but has it in pq and is accessible from its prototype

// METHOD 2
let a = {
  name2: "suraj",
  age: 24,
};

let p = {
  run: () => {
    alert("hello");
  },
};

a.__proto__ = p;

Object.setPrototypeOf(a, p);
console.log(a);
a.run();

// Method 3
var c = { x: 10, y: 20 };

var d = { p: 100, q: 200 };
var d = Object.create(c); // d inherits the properties of c
console.log(d); // logs empty object
console.log(d.p); // undefined Object.create() only enables us to create a new object with a given prototype

console.log(d.x); //  logs the value of x = 10

// ACTUALLY HOW TO USE METHOD 3

var c = { x: 10, y: 20 };

// make cas the prototype
var d = Object.create(a);

console.log(d);

console.log("d.x:", d.x);
console.log("d.y:", d.y);

// add the properties one-dy-one
d.p = 100; // ADD properties one by one
d.q = 200; // ADD properties one by one

console.log("d.p:", d.p);
console.log("d.q:", d.q);
