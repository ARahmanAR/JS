// ====================================
// JavaScript Objects
// ====================================

// 1. Creating Objects
// -------------------
console.log("=== Creating Objects ===");

// Object literal
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Object constructor
const person2 = new Object();
person2.name = "Jane";
person2.age = 25;

// Object.create()
const personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
const person3 = Object.create(personPrototype);
person3.name = "Alice";

console.log("Person:", person);
console.log("Person3 greet:", person3.greet());

// 2. Accessing Properties
// -----------------------
console.log("\n=== Accessing Properties ===");

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    "favorite color": "blue" // Property with space
};

// Dot notation
console.log("First name:", user.firstName);

// Bracket notation
console.log("Last name:", user["lastName"]);
console.log("Favorite color:", user["favorite color"]);

// Dynamic property access
const prop = "age";
console.log("Age:", user[prop]);

// 3. Adding and Modifying Properties
// ----------------------------------
console.log("\n=== Adding/Modifying Properties ===");

const car = {
    brand: "Toyota",
    model: "Camry"
};

// Add new property
car.year = 2023;
car["color"] = "red";

// Modify existing property
car.model = "Corolla";

console.log("Car:", car);

// 4. Deleting Properties
// ----------------------
console.log("\n=== Deleting Properties ===");

const obj = {
    a: 1,
    b: 2,
    c: 3
};

delete obj.b;
console.log("After delete:", obj); // { a: 1, c: 3 }

// 5. Methods
// ----------
console.log("\n=== Object Methods ===");

const calculator = {
    value: 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    multiply(num) {
        this.value *= num;
        return this;
    },
    getValue() {
        return this.value;
    }
};

// Method chaining
const result = calculator.add(10).multiply(2).subtract(5).getValue();
console.log("Calculator result:", result); // 15

// 6. Computed Property Names
// --------------------------
console.log("\n=== Computed Property Names ===");

const propertyName = "dynamicKey";
const obj2 = {
    [propertyName]: "dynamic value",
    [`${propertyName}2`]: "another value"
};

console.log("Dynamic object:", obj2);

// 7. Object Destructuring
// -----------------------
console.log("\n=== Object Destructuring ===");

const employee = {
    name: "Alice",
    age: 28,
    position: "Developer",
    salary: 80000
};

// Basic destructuring
const { name, age } = employee;
console.log(`Name: ${name}, Age: ${age}`);

// Rename variables
const { position: job, salary: pay } = employee;
console.log(`Job: ${job}, Pay: ${pay}`);

// Default values
const { department = "IT", name: empName } = employee;
console.log(`Department: ${department}, Name: ${empName}`);

// Nested destructuring
const company = {
    name: "Tech Corp",
    address: {
        city: "Boston",
        zip: "02101"
    }
};

const { address: { city, zip } } = company;
console.log(`City: ${city}, ZIP: ${zip}`);

// 8. Spread Operator
// ------------------
console.log("\n=== Spread Operator ===");

const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };

// Merge objects
const merged = { ...obj3, ...obj4 };
console.log("Merged:", merged);

// Copy object
const copy = { ...obj3 };
console.log("Copy:", copy);

// Override properties
const updated = { ...obj3, b: 10, e: 5 };
console.log("Updated:", updated);

// 9. Object Methods
// -----------------
console.log("\n=== Built-in Object Methods ===");

const sample = {
    name: "Sample",
    value: 42,
    active: true
};

// Object.keys() - get all keys
console.log("Keys:", Object.keys(sample));

// Object.values() - get all values
console.log("Values:", Object.values(sample));

// Object.entries() - get key-value pairs
console.log("Entries:", Object.entries(sample));

// Object.assign() - copy properties
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log("Assigned:", target);

// Object.freeze() - prevent modifications
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Silently fails in non-strict mode
console.log("Frozen:", frozen);

// Object.seal() - prevent adding/removing properties
const sealed = Object.seal({ y: 1 });
sealed.y = 2; // Can modify
// sealed.z = 3; // Cannot add
console.log("Sealed:", sealed);

// 10. Checking Properties
// -----------------------
console.log("\n=== Checking Properties ===");

const testObj = {
    name: "Test",
    value: 0
};

// hasOwnProperty
console.log("Has 'name':", testObj.hasOwnProperty("name")); // true
console.log("Has 'toString':", testObj.hasOwnProperty("toString")); // false

// in operator
console.log("'name' in object:", "name" in testObj); // true
console.log("'toString' in object:", "toString" in testObj); // true (inherited)

// 11. Getters and Setters
// -----------------------
console.log("\n=== Getters and Setters ===");

const circle = {
    radius: 5,
    get area() {
        return Math.PI * this.radius ** 2;
    },
    get circumference() {
        return 2 * Math.PI * this.radius;
    },
    set diameter(value) {
        this.radius = value / 2;
    },
    get diameter() {
        return this.radius * 2;
    }
};

console.log("Area:", circle.area);
console.log("Circumference:", circle.circumference);
circle.diameter = 20;
console.log("New radius:", circle.radius);

// 12. Object Iteration
// --------------------
console.log("\n=== Object Iteration ===");

const data = {
    a: 1,
    b: 2,
    c: 3
};

// for...in loop
console.log("for...in:");
for (const key in data) {
    console.log(`${key}: ${data[key]}`);
}

// Object.keys() with forEach
console.log("\nObject.keys() forEach:");
Object.keys(data).forEach(key => {
    console.log(`${key}: ${data[key]}`);
});

// Object.entries() with for...of
console.log("\nObject.entries():");
for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
}

// 13. this Keyword
// ---------------
console.log("\n=== this Keyword ===");

const person4 = {
    name: "Bob",
    regularFunction: function() {
        console.log("Regular function this:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function this:", this.name); // undefined (inherits from outer scope)
    }
};

person4.regularFunction(); // "Bob"
person4.arrowFunction();   // undefined

// 14. Object Comparison
// --------------------
console.log("\n=== Object Comparison ===");

const objA = { x: 1 };
const objB = { x: 1 };
const objC = objA;

console.log("objA === objB:", objA === objB); // false (different references)
console.log("objA === objC:", objA === objC); // true (same reference)

// Deep comparison (custom function)
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("deepEqual(objA, objB):", deepEqual(objA, objB)); // true
