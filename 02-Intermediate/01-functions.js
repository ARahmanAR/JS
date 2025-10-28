// ====================================
// JavaScript Functions
// ====================================

// 1. Function Declaration
// -----------------------
console.log("=== Function Declaration ===");

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Function with default parameters
function welcome(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(welcome());                    // "Hello, Guest!"
console.log(welcome("Bob"));               // "Hello, Bob!"
console.log(welcome("Charlie", "Hi"));     // "Hi, Charlie!"

// 2. Function Expression
// ----------------------
console.log("\n=== Function Expression ===");

const add = function(a, b) {
    return a + b;
};

console.log("add(5, 3):", add(5, 3));

// 3. Arrow Functions
// ------------------
console.log("\n=== Arrow Functions ===");

// Single parameter, single expression
const square = x => x * x;
console.log("square(5):", square(5));

// Multiple parameters
const multiply = (a, b) => a * b;
console.log("multiply(4, 6):", multiply(4, 6));

// Multiple statements (need curly braces)
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log("calculateArea(5, 10):", calculateArea(5, 10));

// No parameters
const getRandomNumber = () => Math.random();
console.log("Random number:", getRandomNumber());

// 4. Rest Parameters
// ------------------
console.log("\n=== Rest Parameters ===");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));

function createUser(name, age, ...hobbies) {
    return {
        name,
        age,
        hobbies
    };
}

const user = createUser("John", 25, "reading", "gaming", "coding");
console.log("User:", user);

// 5. Spread Operator with Functions
// ---------------------------------
console.log("\n=== Spread Operator ===");

function showNumbers(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

const nums = [1, 2, 3];
showNumbers(...nums); // Same as showNumbers(1, 2, 3)

// 6. Higher-Order Functions
// -------------------------
console.log("\n=== Higher-Order Functions ===");

// Function that returns a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("double(5):", double(5));  // 10
console.log("triple(5):", triple(5));  // 15

// Function that takes a function as argument
function applyOperation(arr, operation) {
    return arr.map(operation);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Doubled:", applyOperation(numbers, x => x * 2));
console.log("Squared:", applyOperation(numbers, x => x * x));

// 7. Callback Functions
// ---------------------
console.log("\n=== Callback Functions ===");

function processData(data, callback) {
    console.log("Processing data...");
    const result = callback(data);
    console.log("Processing complete!");
    return result;
}

const data = [1, 2, 3, 4, 5];
const result = processData(data, arr => arr.reduce((a, b) => a + b, 0));
console.log("Result:", result);

// 8. Immediately Invoked Function Expression (IIFE)
// -------------------------------------------------
console.log("\n=== IIFE ===");

(function() {
    const message = "I'm executed immediately!";
    console.log(message);
})();

// IIFE with parameters
const result2 = (function(a, b) {
    return a + b;
})(10, 20);
console.log("IIFE result:", result2);

// 9. Closure
// ----------
console.log("\n=== Closures ===");

function counter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = counter();
console.log("Increment:", myCounter.increment()); // 1
console.log("Increment:", myCounter.increment()); // 2
console.log("Decrement:", myCounter.decrement()); // 1
console.log("Current count:", myCounter.getCount()); // 1

// 10. Recursion
// ------------
console.log("\n=== Recursion ===");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5)); // 120

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci(7):", fibonacci(7)); // 13

// 11. Function Methods (call, apply, bind)
// ----------------------------------------
console.log("\n=== Function Methods ===");

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

// call - invoke function with specific 'this' value
introduce.call(person1, "Hello", "!");   // "Hello, I'm Alice!"
introduce.call(person2, "Hi", ".");      // "Hi, I'm Bob."

// apply - same as call but takes array of arguments
introduce.apply(person1, ["Hey", "!"]); // "Hey, I'm Alice!"

// bind - creates new function with bound 'this' value
const boundIntroduce = introduce.bind(person1);
boundIntroduce("Greetings", "~"); // "Greetings, I'm Alice~"

// 12. Generator Functions
// -----------------------
console.log("\n=== Generator Functions ===");

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with infinite sequence
function* infiniteCounter() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const infiniteGen = infiniteCounter();
console.log(infiniteGen.next().value); // 0
console.log(infiniteGen.next().value); // 1
console.log(infiniteGen.next().value); // 2
