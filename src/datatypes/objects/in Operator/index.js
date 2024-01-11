let obj = {
  test: undefined,
};

alert(obj.test); // here if we check obj.test will show undefined which basically means the property doesn't exist

alert("test" in obj); // here when we chck we'll get the value as true so it basically is used to find properties inside an object

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key); // display all keys
  alert(user[key]); // display all the keys values in an object
}
