// Objects in JavaScript

// 1. Creating objects
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  isStudent: false
};

console.log("Person object:", person);

// 2. Accessing properties
console.log("\nAccessing properties:");
console.log("Name:", person.name); // dot notation
console.log("Age:", person["age"]); // bracket notation

// 3. Modifying properties
person.age = 31;
person.country = "USA"; // adding new property
console.log("Updated person:", person);

// 4. Object methods
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract(a, b) { // shorthand method syntax
    return a - b;
  }
};

console.log("\nObject methods:");
console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));

// 5. Object with 'this' keyword
const user = {
  firstName: "Jane",
  lastName: "Smith",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("\nUsing 'this':");
console.log("Full name:", user.fullName());

// 6. Object methods (static)
console.log("\nObject utility methods:");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 7. Object destructuring
const { name, age } = person;
console.log("\nDestructured:");
console.log("Name:", name);
console.log("Age:", age);

// 8. Spread operator with objects
const contact = { email: "john@example.com", phone: "123-456-7890" };
const fullProfile = { ...person, ...contact };
console.log("\nMerged object:", fullProfile);
