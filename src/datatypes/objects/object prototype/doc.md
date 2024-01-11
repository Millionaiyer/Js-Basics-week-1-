# Object Prototype

Javascript objects have a special property called prototype which are either null or refrences another object

When we try to read a property from an object and if it's missing it will try to access it from the prototype. This is called prototype Inheritence.

### Setting Prototype

here the to create a prototype you write `__proto__` keyword.
Here a.**proto** = p means p is the prototype of a.

```
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

p.__proto__ = {
  name: "jackie",
};
a.run();
console.log(a.name);

```

Here when we try to run a.run() it executes because a doesn't have run() but it is available in it's prototype p. same with when it tries to log a.name.

```
let a = {
  name2: "suraj",
  age: 24,
};

let p = {
  run: () => {
    alert("hello");
  },
};


Object.setPrototypeOf(a, p);
a.run();

```

here we set prototype using `Object.setPrototypeOf(a,p)` where p is the prototype of a. When a.run() tries to executes it checks for run() inside a and when it doesn't find it in a it check for it in it's prototype p.
