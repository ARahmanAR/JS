// ====================================
// JavaScript Variables and Data Types
// ====================================

// 1. Variable Declarations
// ------------------------

// var - function scoped (older way, avoid using)
var oldWay = "I'm old school";

// let - block scoped (mutable)
let message = "Hello, JavaScript!";
message = "Message can be changed"; // Can reassign

// const - block scoped (immutable binding)
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign const

console.log("=== Variable Declarations ===");
console.log(message);
console.log(PI);

// 2. Primitive Data Types
// -----------------------

// String
const firstName = "John";
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`; // Template literals

// Number
const age = 25;
const price = 19.99;
const negative = -42;

// Boolean
const isStudent = true;
const hasJob = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
const emptyValue = null;

// Symbol (ES6)
const uniqueId = Symbol('id');

// BigInt (for large integers)
const bigNumber = 9007199254740991n;

console.log("\n=== Data Types ===");
console.log(typeof firstName);  // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof notDefined);  // undefined
console.log(typeof emptyValue);  // object (known quirk)
console.log(typeof uniqueId);    // symbol
console.log(typeof bigNumber);   // bigint

// 3. Type Conversion
// -----------------

// String to Number
const strNum = "123";
const num1 = Number(strNum);
const num2 = parseInt(strNum);
const num3 = parseFloat("123.45");

// Number to String
const numStr = String(123);
const numStr2 = (123).toString();

// To Boolean
const bool1 = Boolean(1);      // true
const bool2 = Boolean(0);      // false
const bool3 = Boolean("");     // false
const bool4 = Boolean("text"); // true

console.log("\n=== Type Conversion ===");
console.log(num1, typeof num1);
console.log(numStr, typeof numStr);
console.log(bool4);

// 4. Variable Scope Examples
// --------------------------

function scopeExample() {
    // Function scope
    var functionScoped = "I'm function scoped";
    
    if (true) {
        // Block scope
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "Me too!";
        
        console.log(blockScoped); // Works
        console.log(functionScoped); // Works
    }
    
    // console.log(blockScoped); // Error: not defined
    console.log(functionScoped); // Works
}

console.log("\n=== Scope Example ===");
scopeExample();
