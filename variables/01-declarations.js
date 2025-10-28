// Variable Declarations in JavaScript

// 1. var - function-scoped (old way)
var oldVariable = "I'm a var";
console.log("var:", oldVariable);

// 2. let - block-scoped (modern way)
let modernVariable = "I'm a let";
console.log("let:", modernVariable);

// 3. const - block-scoped, cannot be reassigned
const constantVariable = "I'm a const";
console.log("const:", constantVariable);

// let can be reassigned
modernVariable = "Updated value";
console.log("Updated let:", modernVariable);

// const cannot be reassigned (will cause error if uncommented)
// constantVariable = "New value"; // Error!

// Block scope example
{
  let blockScoped = "Only available in this block";
  console.log("Inside block:", blockScoped);
}
// console.log(blockScoped); // Error - not defined outside block

// Best practice: use const by default, let when you need to reassign
const PI = 3.14159;
let counter = 0;
counter = counter + 1;
console.log("Counter:", counter);
console.log("PI:", PI);
