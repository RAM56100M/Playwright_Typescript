export {};

let a:number=10, b=20;

//Arithmetic Operators
console.log(a + b);  // Addition: 30
console.log(a - b);  // Subtraction: -10
console.log(a * b);  // Multiplication: 200
console.log(a / b);  // Division: 0.5
console.log(a % b);  // Modulus: 10
console.log(a ** b); // Exponentiation: 100000000000000000000

//Increment and Decrement Operators
// Used to increase or decrease a value by 1.

console.log(++a); // Increment: 11
console.log(--b); // Decrement: 19

//Comparison (Relational) Operators
// Used to compare two values. Returns a Boolean (true or false).

console.log(a > b);  // Greater than: false
console.log(a < b);  // Less than: true
console.log(a >= b); // Greater than or equal to: false
console.log(a <= b); // Less than or equal to: true

// Equality Operators
// Used to check whether two values are equal or not.

console.log(a == b);  // Equal: false
console.log(a != b);  // Not equal: true
console.log(a === b); // Strict equal: false
console.log(a !== b); // Strict not equal: true

// Logical Operators
// Used to combine or reverse conditions.
console.log(a && b); // Logical AND: 19
console.log(a || b); // Logical OR: 11
console.log(!a);    // Logical NOT: false
console.log(!b);    // Logical NOT: false


// Bitwise Operators
// Operate on the binary representation of numbers.
console.log(a & b);  // Bitwise AND: 3
console.log(a | b);  // Bitwise OR: 27
console.log(a ^ b);  // Bitwise XOR: 24
console.log(a << b); // Left shift: 5767168
console.log(a >> b); // Right shift: 0
console.log(a >>> b);// Unsigned right shift: 0


// Assignment Operators
// Used to assign or update variable values.
const assignmentOperand = 20;
let assignmentValue = 10;
console.log(assignmentValue += assignmentOperand);  // Addition assignment: 30
assignmentValue = 10;
console.log(assignmentValue -= assignmentOperand);  // Subtraction assignment: -10
assignmentValue = 10;
console.log(assignmentValue *= assignmentOperand);  // Multiplication assignment: 200
assignmentValue = 10;
console.log(assignmentValue /= assignmentOperand);  // Division assignment: 0.5
assignmentValue = 10;
console.log(assignmentValue %= assignmentOperand);  // Modulus assignment: 10
assignmentValue = 10;
console.log(assignmentValue **= assignmentOperand); // Exponentiation assignment: 100000000000000000000

assignmentValue = 10;
console.log(assignmentValue <<= assignmentOperand); // Left shift assignment: 10485760
assignmentValue = 10;
console.log(assignmentValue >>= assignmentOperand); // Right shift assignment: 0
assignmentValue = 10;
console.log(assignmentValue >>>= assignmentOperand);// Unsigned right shift assignment: 0

assignmentValue = 10;
console.log(assignmentValue &= assignmentOperand); // Bitwise AND assignment: 0
assignmentValue = 10;
console.log(assignmentValue |= assignmentOperand); // Bitwise OR assignment: 30
assignmentValue = 10;
console.log(assignmentValue ^= assignmentOperand); // Bitwise XOR assignment: 30


// Final Comparison Checks
console.log(a == b);  // Equality: false
console.log(a != b);  // Inequality: true
console.log(a === b); // Strict equality: false
console.log(a !== b); // Strict inequality: true

console.log(a > b); // Greater than: false
console.log(a < b); // Less than: true