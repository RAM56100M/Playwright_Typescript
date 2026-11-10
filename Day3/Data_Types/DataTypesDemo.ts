/*
1) Premetive Data Types (Built-in Data Types):
   - number: Represents numeric values (both integers and floating-point numbers).
   - string: Represents textual data enclosed in single or double quotes.
   - boolean: Represents a logical value that can be either true or false.
   - null: Represents the intentional absence of any object value.
   - undefined: Represents a variable that has been declared but has not been assigned a value.
   - Any: Represents a variable that can hold values of any type, allowing for dynamic typing.
   - Union Types: Allows a variable to hold values of multiple specified types, providing flexibility in type assignments.
   - Void: Represents the absence of a value or return type, often used in functions that do not return anything.

2) Non-Premetive Data Types (User-defined Data Types):
   - Array: Represents a collection of elements of the same type, allowing for ordered storage and retrieval of values.
   - Class: Represents a blueprint for creating objects with properties and methods, enabling object-oriented programming in TypeScript.
   - Function: Represents a reusable block of code that can be invoked with arguments and may return a value, facilitating modular programming.
   - Interface: Represents a contract that defines the structure of an object, specifying the properties and methods it should have, enabling type checking and enforcing consistency in object shapes.
   - Tuple: Represents a fixed-size collection of elements of different types, allowing for grouping related values together in a single entity.
   - Enum: Represents a set of named constants, providing a way to define a collection of related values with meaningful names, enhancing code readability and maintainability.
*/  

//--------------------------------------------------------------------------------------------------------------------------------

// 1. Number Data Type: 
let myage: number = 30;
let price: number = 19.99;
console.log("myage: ", myage); // Output: myage: 30
console.log("price: ", price); // Output: price: 19.99
console.log(typeof myage); // Output: Type of myage: number

//2. String Data Type:
/*
1. Single Quotes: Strings can be defined using single quotes (' ') to represent textual data.
2. Double Quotes: Strings can also be defined using double quotes (" ") to represent textual data.
3. Template Literals: Template literals (``) allow for multi-line strings and string interpolation, enabling the inclusion of variables and expressions within the string using ${}.    
*/

let firstName: string = 'Ram'; // Single quotes
let lastName: string = "Marshivane"; // Double quotes
let fullName: string = `Hello ${firstName} ${lastName}`;  
console.log("fullName: ", fullName); // Output: fullName: Hello Ram Marshivane
console.log("Hello", firstName, lastName);

//3. Boolean Data Type:
let isStudent: boolean = true;
let isEmployed: boolean = false;
console.log("isStudent: ", isStudent);
console.log("isEmployed: ", isEmployed);

//4. Null and Undefined Data Types:
let myVariable: null = null;
let undefinedVariable: undefined = undefined;
console.log("myVariable: ", myVariable);
console.log("undefinedVariable: ", undefinedVariable);

//5. Any Data Type:
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log("randomValue: ", randomValue); // Output: randomValue: true

//6. Union Types:
let unionVariable: number | string;
unionVariable = 42;
console.log("unionVariable: ", unionVariable); // Output: unionVariable: 42
unionVariable = "Hello";
console.log("unionVariable: ", unionVariable); // Output: unionVariable: Hello

//7. Void Data Type:
function logMessage(): void {
    console.log("This function does not return anything.");
}
logMessage();