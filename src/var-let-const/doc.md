# Let Const And Var

## What is VAR , Let And Const :

### Var:

**Var** statements can be used to redefine and re-assign variables. They are not block scoped, they are local(function) or globally scoped.
**Note :** If there is no declaration of a type it is considered as global variable like var

### Let :

**Let** statements can be used to re-assign a variable but cannot be redefined. They are block scoped , local and globally scoped.

### Const:

**Const** statements cannot be used to re-assign or redefined a variable. They are block scoped , local and globally scoped.

## Why to use

### Var :

**Var** statements should be avoided since they can be reassigned and redeclared and since it can be redefined and redeclared the margin of creating errors is a lot.

### Let :

#### Purpose of using Let:

**Let**
statements are mostly used to variables you know that are going to be changed or updated in the future.

#### Benefit of using Let:

**Let**
statements can update or change the value of the variable. eg: value of increment variable

## How and when to use Let:

**Let**

```
let increment = 0;
increment = increment + 1;
console.log(increment);
```

Here the increment variable has to be updated. Since we cannot use const , it is best practice to use let over var. Since var might have a chance to be redeclared bymistake.

### Const :

#### Purpose of using Const:

**Const** statements are used for variables that have a constant value , basically for variables whose value doesn't change

#### Benefit of using Const:

**Const** statements cannot be update or change the value of the variable. Hence they can be used for variable you don't want the value to change bymistake.
Eg: Value of PI

## How and when to use Const :

```
const PI = 3.14;
const r = 10;

const areaOfCircle = PI * r * r;
console.log(areaOfCircle);
```

Here we don't want to change the value of PI to be updated ever. It is a constant value and since const can't be updated nor can it be redeclared we use const over let or var.

## REFERENCE LINKS :

[Var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

[Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

[Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
