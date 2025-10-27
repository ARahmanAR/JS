// ====================================
// ES6+ Features
// ====================================

// 1. Let and Const
// ---------------
console.log("=== Let and Const ===");

// Block scope
{
    let blockScoped = "I'm block scoped";
    const alsoBlockScoped = "Me too";
    console.log(blockScoped);
}
// console.log(blockScoped); // Error: not defined

// Const with objects (object itself cannot be reassigned, but properties can)
const person = { name: "John" };
person.name = "Jane"; // OK
// person = {}; // Error: cannot reassign

console.log(person);

// 2. Template Literals
// -------------------
console.log("\n=== Template Literals ===");

const name = "Alice";
const age = 25;

// String interpolation
console.log(`My name is ${name} and I'm ${age} years old`);

// Multi-line strings
const multiLine = `
    This is a
    multi-line
    string
`;
console.log(multiLine);

// Expression in template
console.log(`Next year I'll be ${age + 1}`);

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `**${values[i]}**` : '');
    }, '');
}

const highlighted = highlight`Name: ${name}, Age: ${age}`;
console.log(highlighted);

// 3. Destructuring
// ---------------
console.log("\n=== Destructuring ===");

// Array destructuring
const [a, b, c] = [1, 2, 3];
console.log(`a: ${a}, b: ${b}, c: ${c}`);

// Object destructuring
const user = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, lastName } = user;
console.log(`${firstName} ${lastName}`);

// Nested destructuring
const company = {
    name: "Tech Corp",
    ceo: {
        name: "Jane Smith",
        age: 45
    }
};
const { ceo: { name: ceoName } } = company;
console.log("CEO:", ceoName);

// Function parameter destructuring
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Bob", age: 28 });

// 4. Default Parameters
// --------------------
console.log("\n=== Default Parameters ===");

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// 5. Rest and Spread Operators
// ----------------------------
console.log("\n=== Rest and Spread ===");

// Rest operator in functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// 6. Arrow Functions
// -----------------
console.log("\n=== Arrow Functions ===");

// Traditional function
const add = function(a, b) {
    return a + b;
};

// Arrow function
const add2 = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const getRandom = () => Math.random();

console.log("add2(5, 3):", add2(5, 3));
console.log("square(4):", square(4));
console.log("getRandom():", getRandom());

// Arrow functions and 'this'
const obj = {
    value: 10,
    regularFunction: function() {
        console.log("Regular 'this':", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow 'this':", this.value); // undefined (lexical scope)
    }
};
obj.regularFunction();
obj.arrowFunction();

// 7. Classes
// ----------
console.log("\n=== Classes ===");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static info() {
        return "Animals are living organisms";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
    
    fetch() {
        return `${this.name} is fetching the ball`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak());
console.log(dog.fetch());
console.log(Animal.info());

// 8. Enhanced Object Literals
// --------------------------
console.log("\n=== Enhanced Object Literals ===");

const x = 10;
const y = 20;

// Shorthand property names
const point = { x, y };
console.log("Point:", point);

// Shorthand method names
const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};
console.log("Calculator add:", calculator.add(5, 3));

// Computed property names
const key = "dynamicKey";
const obj3 = {
    [key]: "value",
    [`${key}2`]: "value2"
};
console.log("Dynamic object:", obj3);

// 9. Modules (export/import)
// -------------------------
console.log("\n=== Modules (Conceptual) ===");

// In module file (math.js):
// export const PI = 3.14159;
// export function add(a, b) { return a + b; }
// export default class Calculator {}

// In another file:
// import Calculator, { PI, add } from './math.js';
// import * as MathUtils from './math.js';

console.log("Modules allow code organization and reusability");

// 10. Symbols
// ----------
console.log("\n=== Symbols ===");

const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log("sym1 === sym2:", sym1 === sym2); // false (unique)

// Symbols as object keys
const uniqueKey = Symbol('unique');
const obj4 = {
    [uniqueKey]: 'This is unique',
    regularKey: 'This is regular'
};

console.log(obj4[uniqueKey]);
console.log("Object.keys:", Object.keys(obj4)); // Doesn't show symbol keys

// 11. Iterators and Generators
// ---------------------------
console.log("\n=== Generators ===");

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with loop
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}

// 12. Map and Set
// --------------
console.log("\n=== Map ===");

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'number key');

console.log("Map size:", map.size);
console.log("Get 'name':", map.get('name'));
console.log("Has 'age':", map.has('age'));

// Iterate over map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

console.log("\n=== Set ===");

const set = new Set([1, 2, 3, 4, 4, 5]);
console.log("Set:", set); // {1, 2, 3, 4, 5} - duplicates removed

set.add(6);
set.delete(1);
console.log("Has 3:", set.has(3));
console.log("Size:", set.size);

// 13. WeakMap and WeakSet
// ----------------------
console.log("\n=== WeakMap and WeakSet ===");

const weakMap = new WeakMap();
let obj5 = { name: 'Object' };
weakMap.set(obj5, 'metadata');

console.log("WeakMap get:", weakMap.get(obj5));
// When obj5 is garbage collected, the weakMap entry is also removed

// 14. Proxy
// ---------
console.log("\n=== Proxy ===");

const target = {
    message: "Hello"
};

const handler = {
    get(target, prop) {
        console.log(`Getting property: ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting property: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // Logs: Getting property: message
proxy.message = "Hi";       // Logs: Setting property: message = Hi

// 15. Optional Chaining and Nullish Coalescing
// -------------------------------------------
console.log("\n=== Optional Chaining & Nullish Coalescing ===");

const user2 = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Optional chaining
console.log("City:", user2?.address?.city);
console.log("ZIP:", user2?.address?.zip); // undefined (no error)

// Nullish coalescing
const value1 = null ?? "default";
const value2 = 0 ?? "default";
const value3 = "" ?? "default";

console.log("null ?? 'default':", value1);  // "default"
console.log("0 ?? 'default':", value2);     // 0
console.log("'' ?? 'default':", value3);    // ""
