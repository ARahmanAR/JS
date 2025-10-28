// ====================================
// JavaScript Control Flow
// ====================================

// 1. If-Else Statements
// ---------------------
console.log("=== If-Else Statements ===");

const temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm!");
} else if (temperature > 10) {
    console.log("It's cool!");
} else {
    console.log("It's cold!");
}

// 2. Switch Statement
// -------------------
console.log("\n=== Switch Statement ===");

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}

// 3. For Loop
// -----------
console.log("\n=== For Loop ===");

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// For loop with array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 4. While Loop
// -------------
console.log("\n=== While Loop ===");

let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// 5. Do-While Loop
// ----------------
console.log("\n=== Do-While Loop ===");

let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

// 6. For...of Loop (for iterables)
// --------------------------------
console.log("\n=== For...of Loop ===");

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(`Color: ${color}`);
}

// Works with strings too
const word = "Hello";
for (const char of word) {
    console.log(`Char: ${char}`);
}

// 7. For...in Loop (for object properties)
// ----------------------------------------
console.log("\n=== For...in Loop ===");

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 8. Break and Continue
// ---------------------
console.log("\n=== Break and Continue ===");

// Break - exits the loop
console.log("Break example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop at 5
    }
    console.log(i);
}

// Continue - skips current iteration
console.log("\nContinue example:");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// 9. Array Methods for Iteration
// ------------------------------
console.log("\n=== Array Iteration Methods ===");

const numbers = [1, 2, 3, 4, 5];

// forEach
console.log("forEach:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map - creates new array
console.log("\nmap:");
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter - creates new array with elements that pass test
console.log("\nfilter:");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce - reduces array to single value
console.log("\nreduce:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// find - returns first element that passes test
console.log("\nfind:");
const found = numbers.find(num => num > 3);
console.log("First number > 3:", found);

// some - tests if at least one element passes test
console.log("\nsome:");
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);

// every - tests if all elements pass test
console.log("\nevery:");
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);

// 10. Try-Catch-Finally
// --------------------
console.log("\n=== Error Handling ===");

try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always runs");
}

function riskyOperation() {
    throw new Error("Something went wrong!");
}

// Custom error handling
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

console.log("\nDivision result:", divide(10, 2));
console.log("Division by zero:", divide(10, 0));
