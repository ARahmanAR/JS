// ====================================
// JavaScript Arrays
// ====================================

// 1. Creating Arrays
// ------------------
console.log("=== Creating Arrays ===");

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true, null, { key: "value" }];
const empty = [];

// Using Array constructor
const arr1 = new Array(3);      // Creates array with 3 empty slots
const arr2 = new Array(1, 2, 3); // Creates [1, 2, 3]

// Using Array.from()
const arr3 = Array.from("hello");  // ['h', 'e', 'l', 'l', 'o']
const arr4 = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

console.log("Fruits:", fruits);
console.log("Array from string:", arr3);
console.log("Array with indices:", arr4);

// 2. Accessing and Modifying Elements
// -----------------------------------
console.log("\n=== Accessing Elements ===");

const colors = ["red", "green", "blue", "yellow"];

console.log("First element:", colors[0]);      // "red"
console.log("Last element:", colors[colors.length - 1]); // "yellow"
console.log("Length:", colors.length);

// Modify elements
colors[1] = "purple";
console.log("Modified:", colors);

// 3. Adding Elements
// ------------------
console.log("\n=== Adding Elements ===");

const nums = [1, 2, 3];

// push - add to end
nums.push(4);
console.log("After push:", nums); // [1, 2, 3, 4]

// unshift - add to beginning
nums.unshift(0);
console.log("After unshift:", nums); // [0, 1, 2, 3, 4]

// splice - insert at position
nums.splice(2, 0, 1.5); // Insert 1.5 at index 2
console.log("After splice:", nums); // [0, 1, 1.5, 2, 3, 4]

// 4. Removing Elements
// -------------------
console.log("\n=== Removing Elements ===");

const items = ["a", "b", "c", "d", "e"];

// pop - remove from end
const last = items.pop();
console.log("Popped:", last);       // "e"
console.log("After pop:", items);   // ["a", "b", "c", "d"]

// shift - remove from beginning
const first = items.shift();
console.log("Shifted:", first);     // "a"
console.log("After shift:", items); // ["b", "c", "d"]

// splice - remove from position
const removed = items.splice(1, 1); // Remove 1 element at index 1
console.log("Removed:", removed);   // ["c"]
console.log("After splice:", items); // ["b", "d"]

// 5. Array Methods - Iteration
// ----------------------------
console.log("\n=== Array Iteration Methods ===");

const values = [1, 2, 3, 4, 5];

// forEach - execute function for each element
values.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});

// map - create new array with transformed elements
const squared = values.map(x => x * x);
console.log("\nSquared:", squared); // [1, 4, 9, 16, 25]

// filter - create new array with elements that pass test
const evens = values.filter(x => x % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// reduce - reduce array to single value
const sum = values.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum); // 15

// reduceRight - reduce from right to left
const reversed = values.reduceRight((acc, val) => [...acc, val], []);
console.log("Reversed:", reversed); // [5, 4, 3, 2, 1]

// 6. Array Methods - Searching
// ----------------------------
console.log("\n=== Array Searching Methods ===");

const animals = ["cat", "dog", "bird", "cat", "fish"];

// indexOf - first index of element
console.log("indexOf('cat'):", animals.indexOf("cat")); // 0

// lastIndexOf - last index of element
console.log("lastIndexOf('cat'):", animals.lastIndexOf("cat")); // 3

// includes - check if element exists
console.log("includes('bird'):", animals.includes("bird")); // true

// find - first element that passes test
const found = values.find(x => x > 3);
console.log("find(x > 3):", found); // 4

// findIndex - index of first element that passes test
const foundIndex = values.findIndex(x => x > 3);
console.log("findIndex(x > 3):", foundIndex); // 3

// some - test if at least one element passes test
const hasLarge = values.some(x => x > 10);
console.log("some(x > 10):", hasLarge); // false

// every - test if all elements pass test
const allPositive = values.every(x => x > 0);
console.log("every(x > 0):", allPositive); // true

// 7. Array Methods - Transformation
// ---------------------------------
console.log("\n=== Array Transformation Methods ===");

const letters = ["a", "b", "c"];

// join - create string from array
console.log("join():", letters.join());      // "a,b,c"
console.log("join('-'):", letters.join("-")); // "a-b-c"

// concat - merge arrays
const arr5 = [1, 2];
const arr6 = [3, 4];
const merged = arr5.concat(arr6);
console.log("concat:", merged); // [1, 2, 3, 4]

// slice - extract portion
const sliced = values.slice(1, 4);
console.log("slice(1, 4):", sliced); // [2, 3, 4]

// flat - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat():", nested.flat());      // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nested.flat(2));    // [1, 2, 3, 4, 5, 6]

// flatMap - map then flatten
const words = ["hello", "world"];
const chars = words.flatMap(word => word.split(""));
console.log("flatMap:", chars); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// 8. Array Methods - Sorting
// --------------------------
console.log("\n=== Array Sorting Methods ===");

const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];

// sort - sort in place
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);

const descending = [...unsorted].sort((a, b) => b - a);
console.log("Sorted descending:", descending);

// reverse - reverse in place
const reversedArr = [...sorted].reverse();
console.log("Reversed:", reversedArr);

// 9. Destructuring Arrays
// -----------------------
console.log("\n=== Array Destructuring ===");

const [x, y, z] = [1, 2, 3];
console.log(`x: ${x}, y: ${y}, z: ${z}`);

// Skip elements
const [first2, , third] = [10, 20, 30];
console.log(`first: ${first2}, third: ${third}`);

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("head:", head);   // 1
console.log("tail:", tail);   // [2, 3, 4, 5]

// Default values
const [a = 1, b = 2, c = 3] = [10];
console.log(`a: ${a}, b: ${b}, c: ${c}`); // a: 10, b: 2, c: 3

// 10. Spread Operator
// -------------------
console.log("\n=== Spread Operator ===");

const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];
const combined = [...arr7, ...arr8];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr7];
console.log("Copy:", copy);

// Array to function arguments
const maxValue = Math.max(...values);
console.log("Max value:", maxValue); // 5

// 11. Multi-dimensional Arrays
// ----------------------------
console.log("\n=== Multi-dimensional Arrays ===");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Element at [1][2]:", matrix[1][2]); // 6

// Iterate through 2D array
console.log("Matrix elements:");
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`[${i}][${j}] = ${cell}`);
    });
});
