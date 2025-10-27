// ====================================
// JavaScript Operators
// ====================================

// 1. Arithmetic Operators
// -----------------------
console.log("=== Arithmetic Operators ===");

let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponentiation:", a ** b); // 1000

// Increment and Decrement
let x = 5;
console.log("x++:", x++); // 5 (post-increment)
console.log("x:", x);     // 6
console.log("++x:", ++x); // 7 (pre-increment)
console.log("x--:", x--); // 7 (post-decrement)
console.log("--x:", --x); // 5 (pre-decrement)

// 2. Assignment Operators
// -----------------------
console.log("\n=== Assignment Operators ===");

let num = 10;
num += 5;  // num = num + 5
console.log("num += 5:", num); // 15

num -= 3;  // num = num - 3
console.log("num -= 3:", num); // 12

num *= 2;  // num = num * 2
console.log("num *= 2:", num); // 24

num /= 4;  // num = num / 4
console.log("num /= 4:", num); // 6

num %= 4;  // num = num % 4
console.log("num %= 4:", num); // 2

// 3. Comparison Operators
// -----------------------
console.log("\n=== Comparison Operators ===");

console.log("5 == '5':", 5 == '5');   // true (loose equality)
console.log("5 === '5':", 5 === '5'); // false (strict equality)
console.log("5 != '5':", 5 != '5');   // false
console.log("5 !== '5':", 5 !== '5'); // true

console.log("10 > 5:", 10 > 5);   // true
console.log("10 < 5:", 10 < 5);   // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("10 <= 5:", 10 <= 5);  // false

// 4. Logical Operators
// --------------------
console.log("\n=== Logical Operators ===");

const isAdult = true;
const hasLicense = false;

console.log("AND (&&):", isAdult && hasLicense); // false
console.log("OR (||):", isAdult || hasLicense);  // true
console.log("NOT (!):", !isAdult);               // false

// Short-circuit evaluation
const result1 = true || console.log("Not executed");
const result2 = false && console.log("Not executed");

// Nullish coalescing (??)
const value1 = null ?? "default";
const value2 = 0 ?? "default";
console.log("null ?? 'default':", value1);  // "default"
console.log("0 ?? 'default':", value2);     // 0

// 5. Ternary Operator
// -------------------
console.log("\n=== Ternary Operator ===");

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // "Yes"

// Nested ternary
const score = 85;
const grade = score >= 90 ? "A" : 
              score >= 80 ? "B" : 
              score >= 70 ? "C" : "F";
console.log("Grade:", grade); // "B"

// 6. String Operators
// -------------------
console.log("\n=== String Operators ===");

const str1 = "Hello";
const str2 = "World";
const greeting = str1 + " " + str2; // Concatenation
console.log(greeting); // "Hello World"

// Template literals (preferred)
const name = "Alice";
const message = `Welcome, ${name}!`;
console.log(message); // "Welcome, Alice!"

// 7. Type Operators
// -----------------
console.log("\n=== Type Operators ===");

console.log("typeof 42:", typeof 42);           // "number"
console.log("typeof 'text':", typeof "text");   // "string"
console.log("typeof true:", typeof true);       // "boolean"

const arr = [1, 2, 3];
console.log("Array.isArray([1,2,3]):", Array.isArray(arr)); // true

// instanceof
class Person {}
const person = new Person();
console.log("person instanceof Person:", person instanceof Person); // true

// 8. Spread and Rest Operators (...)
// -----------------------------------
console.log("\n=== Spread Operator ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Merged objects:", merged); // { a: 1, b: 2, c: 3, d: 4 }

// Rest operator in function
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("sum(1, 2, 3, 4):", sum(1, 2, 3, 4)); // 10

// 9. Optional Chaining (?.)
// -------------------------
console.log("\n=== Optional Chaining ===");

const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log("City:", user?.address?.city);        // "New York"
console.log("Zip:", user?.address?.zip);          // undefined
console.log("Country:", user?.country?.name);     // undefined (no error)
