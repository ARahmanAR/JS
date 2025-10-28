// Arrays in JavaScript

// 1. Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);

// 2. Accessing elements
console.log("\nAccessing elements:");
console.log("First fruit:", fruits[0]);
console.log("Last number:", numbers[numbers.length - 1]);

// 3. Common array methods
console.log("\nArray methods:");

// push - add to end
fruits.push("grape");
console.log("After push:", fruits);

// pop - remove from end
const removed = fruits.pop();
console.log("Removed:", removed);
console.log("After pop:", fruits);

// unshift - add to beginning
fruits.unshift("mango");
console.log("After unshift:", fruits);

// shift - remove from beginning
const firstFruit = fruits.shift();
console.log("Removed first:", firstFruit);
console.log("After shift:", fruits);

// 4. Array iteration methods
console.log("\nIteration methods:");

// forEach
console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(`  ${index}: ${fruit}`);
});

// map - transform array
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase:", uppercaseFruits);

// filter - filter elements
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Long names:", longFruits);

// find - find first matching element
const found = fruits.find(fruit => fruit.startsWith("b"));
console.log("Found:", found);

// 5. Array methods
console.log("\nOther methods:");
console.log("Length:", fruits.length);
console.log("Includes 'apple':", fruits.includes("apple"));
console.log("Index of 'orange':", fruits.indexOf("orange"));
console.log("Joined:", fruits.join(", "));
