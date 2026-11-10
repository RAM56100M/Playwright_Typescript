# TypeScript Variables and Data Types

TypeScript lets you describe the kind of value a variable can hold. This helps catch many mistakes while writing code, before it runs.

## Contents

- [Variables](#variables)
- [Basic types](#basic-types)
- [Special types](#special-types)
- [Collection types](#collection-types)
- [Object and custom types](#object-and-custom-types)
- [Quick reference](#quick-reference)

## Variables

A variable is a named place to store a value. TypeScript supports three variable declaration keywords:

| Keyword | Scope | Can the variable be reassigned? |
| --- | --- | --- |
| `var` | Function-scoped | Yes |
| `let` | Block-scoped | Yes |
| `const` | Block-scoped | No |

`const` prevents reassignment of the variable itself. For an object or array declared with `const`, its contents can still be changed.

```ts
var age: number = 30;
let city: string = "Pune";
const country: string = "India";
```

## Basic types

### `string`

Use `string` for text.

```ts
let employeeName: string = "Ram";
let cityName: string = "Pune";

console.log(employeeName);
console.log(cityName);
```

### `number`

Use `number` for integers, decimals, and negative numbers.

```ts
let age: number = 30;
let salary: number = 120000;
let percentage: number = 85.5;

console.log(age);
console.log(salary);
console.log(percentage);
```

### `boolean`

Use `boolean` for either `true` or `false`.

```ts
let isEmployed: boolean = true;
let isActive: boolean = false;

console.log(isEmployed);
console.log(isActive);
```

### `undefined` and `null`

`undefined` usually indicates that a value has not been assigned. `null` represents an intentional absence of a value.

```ts
let employeeId: undefined = undefined;
let employeeAddress: null = null;
```

With `strictNullChecks` enabled, `null` and `undefined` are distinct types. To allow one alongside another type, use a union:

```ts
let optionalEmployeeId: number | undefined;
optionalEmployeeId = 101;
optionalEmployeeId = undefined;
```

## Special types

### `any`

`any` allows a value to change to any type and disables type checking for that value. Avoid it when possible because it removes much of TypeScript's type safety.

```ts
let data: any = "Ram";

data = 100;
data = true;
data = { name: "Ram" };
```

### `unknown`

`unknown` can hold any value, but you must check its type before using it as a particular type.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

### `void`

Use `void` as a function's return type when it does not return a value.

```ts
function greet(): void {
    console.log("Hello Ram");
}

greet();
```

### `never`

`never` describes a value that does not occur. It is often used for functions that always throw an error or never finish.

```ts
function throwError(): never {
    throw new Error("Something went wrong");
}
```

## Collection types

### Arrays

An array stores multiple values. The type annotation specifies the type of its elements.

```ts
let numbers: number[] = [10, 20, 30];
let names: string[] = ["Ram", "John", "David"];

console.log(numbers);
console.log(names);
```

The generic `Array<Type>` syntax is another way to write an array type:

```ts
let marks: Array<number> = [80, 90, 95];
```

### Tuples

A tuple describes an array with a specific type at each position.

```ts
let employee: [number, string, boolean];

employee = [101, "Ram", true];

console.log(employee);
```

### Enums

An enum groups named constants under one type.

```ts
enum Browser {
    Chrome,
    Firefox,
    Edge
}

let selectedBrowser: Browser = Browser.Chrome;

console.log(selectedBrowser);
```

## Object and custom types

### Objects

An object type describes the properties an object must have and the type of each property.

```ts
let employeeDetails: {
    name: string;
    age: number;
    isActive: boolean;
};

employeeDetails = {
    name: "Ram",
    age: 30,
    isActive: true
};
```

### Union types

A union allows a value to have one of several specified types.

```ts
let userId: string | number;

userId = 101;
userId = "EMP101";
```

### Literal types

A literal type restricts a value to a specific set of allowed values.

```ts
let browser: "Chrome" | "Firefox" | "Edge";

browser = "Chrome";
```

### Type aliases

A type alias gives a reusable name to a type.

```ts
type Employee = {
    name: string;
    age: number;
    salary: number;
};

let employeeOne: Employee = {
    name: "Ram",
    age: 30,
    salary: 120000
};
```

## Quick reference

| Type | Purpose |
| --- | --- |
| `string` | Text |
| `number` | Numeric values |
| `boolean` | `true` or `false` |
| `undefined` | A value that has not been assigned |
| `null` | An intentional absence of a value |
| `any` | Any value, without type checking |
| `unknown` | Any value; check its type before use |
| `void` | A function does not return a value |
| `never` | A value that does not occur |
| `Type[]` / `Array<Type>` | A collection of values of one type |
| Tuple | Values with specific types at specific positions |
| Enum | A group of named constants |
| Object type | Properties and their types |
| Union (`A \| B`) | A value may have one of several types |
| Literal | One of a set of specific values |
| Type alias | A reusable name for a type |
