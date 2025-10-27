// Loops in JavaScript

// 1. for loop
console.log("1. For loop:");
for (let i = 0; i < 5; i++) {
  console.log(`  Iteration ${i}`);
}

// 2. while loop
console.log("\n2. While loop:");
let count = 0;
while (count < 5) {
  console.log(`  Count: ${count}`);
  count++;
}

// 3. do-while loop
console.log("\n3. Do-while loop:");
let num = 0;
do {
  console.log(`  Number: ${num}`);
  num++;
} while (num < 5);

// 4. for...of loop (for arrays)
console.log("\n4. For...of loop:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(`  Color: ${color}`);
}

// 5. for...in loop (for object properties)
console.log("\n5. For...in loop:");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`  ${key}: ${person[key]}`);
}

// 6. Array forEach method
console.log("\n6. forEach method:");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(`  Index ${index}: ${num}`);
});

// 7. break and continue
console.log("\n7. Break and continue:");
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("  Skipping 3");
    continue; // skip this iteration
  }
  if (i === 7) {
    console.log("  Breaking at 7");
    break; // exit loop
  }
  console.log(`  Value: ${i}`);
}

// 8. Nested loops
console.log("\n8. Nested loops:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`  ${i} x ${j} = ${i * j}`);
  }
}
