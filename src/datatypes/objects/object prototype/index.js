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

p.__proto__ = {
  name: "jackie",
};
a.run();
console.log(a.name);
