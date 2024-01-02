// Var can be reassigned and redeclared so it won't throw any error

var b = 10; // Here var is declared as 10
var b = 20; // here var is redeclared as 20
b = 30; // here var is reassigned as 30 

let a = 10;
//  Uncomment the code below and execute it but executing the code below this might throw an error because let cannot be redeclared
// let a = 20;
a = 30;

const c = 10;
//  Uncomment the code below and execute it but executing the code below this might throw an error because Const cannot be redeclared or reassigned
// const c = 20;
// c = 20;

console.log(a, b, c);
Output : 


// const PI = 3.14;
// const r = 10;

// const areaOfCircle = PI * r * r;
// console.log(areaOfCircle);
