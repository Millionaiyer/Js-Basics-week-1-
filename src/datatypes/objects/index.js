//  Initializing an object

let employee = {
  name: "Suraj", // object keys and values
  age: 25,
  gender: "Male",
  address: {
    city: "Mumbai",
    country: "India",
  },
};

console.log(employee.name); // accessing a property of an object
console.log(employee.address.city);

let obj = {
  test: undefined,
};

console.log(obj.test);

console.log("test" in obj); // using in to check if the property exists in the object

let person = {
  name: "Suraj",
  gender: "Male",
  age: 25,
};
delete person.age; // deleting property in an object
person.location = "Mumbai"; // adding property in an object
console.log(person);

//  Using objecs

let company = {
  name: "flyerssoft",
  location: "Chennai",
  details: function () {
    //method isnide an object
    return console.log(`the company name is ${this.name} and is located in `); // can use this keyword to access the properties outside of the method
  },
};

console.log(company.details()); // access the method like other properties
