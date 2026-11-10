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

TypeScript provides data types to define what kind of values a variable can store. It is a statically typed superset of JavaScript.*/

//var vs let vs const
//------------------------------------
/*
1) Scope: var is function-scoped, while let and const are block-scoped.
2) Declaration and Initialization: var declarations are hoisted to the top of their scope and initialized with undefined, while let and const declarations are hoisted but not initialized.
3) Re-declaration: var allows re-declaration of the same variable within the same scope, while let and const do not allow re-declaration within the same scope.
4) Reassignment: var and let can be reassigned, while const cannot be reassigned after its initial assignment.
5) Hoisting: var declarations are hoisted to the top of their scope and initialized with undefined, while let and const declarations are hoisted but not initialized.
 */

//SCOPE -Accessible Area (Function, Block, Global)

//Functional Scope
function myFunction() {
    var x = 10;
}

//Block Scope
if (true) {
    let y = 20;
    const z = 30;
}


// Example 1 of variable declaration and initialization in TypeScript (Functional Scope):

function variableScopeExample() {
    if (true) {
        var functionScopedVariable = "I am function scoped";
        console.log(functionScopedVariable); // Accessible here

    }
    console.log(functionScopedVariable); // Accessible here as well, because var is function scoped
}
    variableScopeExample();
    // Output: I am function scoped

 //--------------------------------------------------
//Example 2 of variable declaration and initialization in TypeScript (Block Scope):

function blockScopeExample() {
    let blockScopedVariable = "I am block scoped";
    const greeting = "Hello, Const!";
    console.log(blockScopedVariable); // Accessible here
    console.log(greeting); // Accessible here
}

    // console.log(blockScopedVariable); // Not accessible here
    // console.log(greeting); // Not accessible here

    blockScopeExample();
    // Output: I am block scoped
    // Output: Hello, Const!

    //Example 3:

    function scopedifferenceExample() {
        if (true) {
            var functionScopedVar = "I am function scoped";
            let blockScopedVar = "I am block scoped";
            const constVar = "I am a constant";
        }

        console.log(functionScopedVar); // Accessible here, because var is function scoped
       //  console.log(blockScopedVar); // Not accessible here, because let is block scoped. Throws an Error: Cannot find name 'blockScopedVar'.
        // console.log(constVar); // Not accessible here, because const is block scoped.  Throws an Error: Cannot find name 'blockScopedVar'.
    }
    scopedifferenceExample();

    console.log("---Declaration /variable Assignment---");
    //------------------------------------------------------------------------------------------------------------
    // 2) Declaration /variable Assignment

    // Example1: Variable declaration without initialization in TypeScript:
    var x; // Declaration without initialization
    console.log(x); // Output: undefined
    x= 10; // Initialization
    console.log(x); // Output: 10

    //Exaple2: Let variable declaration without initialization in TypeScript:
    let y;
    console.log(y); // Output: undefined
    y = 20; // Initialization
    console.log(y); // Output: 20

    //Example3: Const variable declaration without initialization in TypeScript:
    // const z; // Error: 'const' declarations must be initialized
    // console.log(z); // Not accessible here, because const is block scoped.  Throws an Error: Cannot find name 'blockScopedVar'.

    //------------------------------------------------------------------------------------------------------------------------------------
    console.log("---Re-declaration of variable in TypeScript---");

    // 3) Re-declaration of variable in TypeScript:
    // Example1: Re-declaration of var variable in TypeScript: Var allows re-declaration of the same variable within the same scope.
    var count = 1;
    var count = 2;

    console.log(count); // Output: 2

    // Example2: Re-declaration of let and const variable in TypeScript: Let and const do not allow re-declaration within the same scope.
    let username = "Alice";
    // let username = "Bob"; // Error: Cannot redeclare block-scoped variable 'username'.
    console.log(username); // Output: Alice

    // Example3: Re-declaration of const variable in TypeScript: Const does not allow re-declaration within the same scope.
    const pi = 3.14;
    // const pi = 3.14159; // Error: Cannot redeclare block-scoped variable 'pi'.
    console.log(pi); // Output: 3.14

    console.log("---Reassignment of variable in TypeScript---");
    //------------------------------------------------------------------------------------------------------------------------------------
    // 3. Reassignment of variable in TypeScript:
    // Example1: Reassignment of var variable in TypeScript: Var allows reassignment of the same variable within the same scope.
    var age = 25;
    age = 30;
    console.log(age); // Output: 30

    // Example2: Reassignment of let variable in TypeScript: Let allows reassignment of the same variable within the same scope.
    let height = 170;
    height = 180;
    console.log(height); // Output: 180

    // Example3: Reassignment of const variable in TypeScript: Const does not allow reassignment within the same scope.
    const weight = 70;
    // weight = 80; // Error: Cannot assign to 'weight' because it is a constant.
    console.log(weight); // Output: 70

    console.log("---Hoisting of variable in TypeScript---");
    //------------------------------------------------------------------------------------------------------------------------------------
    // 4) Hoisting of variable in TypeScript:
    // console.log(a);
     var a = 10; // Output: undefined (due to hoisting)
     console.log(a); // Output: 10

    // console.log(b); // Error: Cannot access 'b' before initialization
    let b = 20; // Output: ReferenceError: Cannot access 'b' before initialization
    console.log(b); // Output: 20

    // console.log(c); // Error: Cannot access 'c' before initialization
    const c = 30;
    console.log(c); // Output: 30