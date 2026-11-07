/* Variable: container which can hold a value of any type
let variable: any;
x=10
OwnerName= "Ram"

var, let, const are the three ways to declare a variable in TypeScript.
var: function scoped variable
const: block scoped variable, cannot be reassigned
let: block scoped variable, can be reassigned
*/
var age=30;
console.log(age);

/*
# Data Types in TypeScript

TypeScript provides data types to define what kind of values a variable can store. It is a statically typed superset of JavaScript.

Let's cover the important data types with examples.

## 1. Basic data types

### 1. String

Used to store text values.

```
let employeeName: string = "Ram";
let city: string = "Pune";

console.log(employeeName);
console.log(city);
```

### 2. Number

Used for integers, decimals and negative numbers.

```
let age: number = 30;
let salary: number = 120000;
let percentage: number = 85.5;

console.log(age);
console.log(salary);
```

### 3. Boolean

Stores either `true` or `false`.

```
let isEmployed: boolean = true;
let isMarried: boolean = true;
let isActive: boolean = false;

console.log(isEmployed);
```

### 4. Undefined

A variable that has been declared but not assigned a value.

```
let employeeId: undefined = undefined;
```

### 5. Null

Represents an intentional absence of a value.

```
let employeeAddress: null = null;
```

## 2. Special data types

### 6. Any

Can store any type of value. TypeScript does not enforce type checking for that variable.

```
let data: any = "Ram";

data = 100;
data = true;
data = { name: "Ram" };
```

Avoid using `any` unnecessarily.

### 7. Unknown

Can store any value, but requires type checking before using it.

```
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

### 8. Void

Used when a function does not return a value.

```
function greet(): void {
    console.log("Hello Ram");
}

greet();
```

### 9. Never

Represents a value that never occurs, such as a function that always throws an error.

```
function throwError(): never {
    throw new Error("Something went wrong");
}
```

## 3. Collection data types

### 10. Array

Stores multiple values of the same type.

```
let numbers: number[] = [10, 20, 30];

let names: string[] = ["Ram", "John", "David"];

console.log(numbers);
console.log(names);
```

Another syntax:

```
let marks: Array<number> = [80, 90, 95];
```

### 11. Tuple

Stores a fixed sequence of values with specific types.

```
let employee: [number, string, boolean];

employee = [101, "Ram", true];

console.log(employee);
```

### 12. Enum

Used to define a set of named constants.

```
enum Browser {
    Chrome,
    Firefox,
    Edge
}

let selectedBrowser: Browser = Browser.Chrome;

console.log(selectedBrowser);
```

## 4. Advanced data types

### 13. Object

Used to store multiple properties.

```
let employee: {
    name: string;
    age: number;
    isActive: boolean;
};

employee = {
    name: "Ram",
    age: 30,
    isActive: true
};
```

### 14. Union

Allows a variable to hold more than one specified type.

```
let userId: string | number;

userId = 101;
userId = "EMP101";
```

### 15. Literal types

Restricts a variable to specific values.

```
let browser: "Chrome" | "Firefox" | "Edge";

browser = "Chrome";
```

### 16. Type Alias

Allows you to create your own reusable type.

```
type Employee = {
    name: string;
    age: number;
    salary: number;
};

let emp1: Employee = {
    name: "Ram",
    age: 30,
    salary: 120000
};
```

## Quick revision table

| Data type | Purpose                       |
| --------- | ----------------------------- |
| string    | Text                          |
| number    | Numeric values                |
| boolean   | True / False                  |
| undefined | Unassigned value              |
| null      | Intentional empty value       |
| any       | Any value without type safety |
| unknown   | Any value with type safety    |
| void      | No return value               |
| never     | Never returns normally        |
| array     | Collection of values          |
| tuple     | Fixed-position typed values   |
| enum      | Named constants               |
| object    | Structured data               |
| union     | Multiple allowed types        |
| literal   | Specific allowed values       |
| type      | Reusable custom type          |
*/