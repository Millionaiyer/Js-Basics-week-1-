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

[Objects](https://javascript.info/object#property-existence-test-in-operator)
