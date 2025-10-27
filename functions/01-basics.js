// Functions in JavaScript

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));

// 2. Function Expression
const add = function(a, b) {
  return a + b;
};
console.log("Sum:", add(5, 3));

// 3. Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 5));

// 4. Arrow Function with block body
const calculateArea = (length, width) => {
  const area = length * width;
  return area;
};
console.log("Area:", calculateArea(10, 5));

// 5. Function with default parameters
const greetUser = (name = "Guest") => {
  return `Welcome, ${name}!`;
};
console.log(greetUser());
console.log(greetUser("John"));

// 6. Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
console.log("Sum of all:", sum(1, 2, 3, 4, 5));
