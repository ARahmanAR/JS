// ====================================
// Exercises: Intermediate Level
// ====================================

console.log("=== Intermediate Exercises ===\n");

// Exercise 1: Debounce Function
// Create a function that delays execution until after wait time has elapsed
console.log("Exercise 1: Debounce Function");
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedLog = debounce((msg) => console.log(msg), 1000);
debouncedLog("This will be delayed");

// Exercise 2: Deep Clone
// Create a function that deep clones an object
console.log("\nExercise 2: Deep Clone");
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const cloned = deepClone(original);
cloned.b.c = 10;
console.log("Original:", original);
console.log("Cloned:", cloned);

// Exercise 3: Curry Function
// Create a function that transforms a function into a curried version
console.log("\nExercise 3: Curry Function");
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log("curriedAdd(1)(2)(3):", curriedAdd(1)(2)(3));
console.log("curriedAdd(1, 2)(3):", curriedAdd(1, 2)(3));

// Exercise 4: Memoization
// Create a function that caches results of expensive operations
console.log("\nExercise 4: Memoization");
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log("Retrieved from cache");
            return cache[key];
        }
        console.log("Calculating...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const expensiveOperation = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
};

const memoizedOp = memoize(expensiveOperation);
console.log("Result:", memoizedOp(1000000));
console.log("Result:", memoizedOp(1000000)); // From cache

// Exercise 5: Promise.all Implementation
// Create your own version of Promise.all
console.log("\nExercise 5: Custom Promise.all");
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => console.log("Custom Promise.all:", results));

// Exercise 6: Object Grouping
// Group an array of objects by a property
console.log("\nExercise 6: Group By");
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];
console.log("Grouped by age:", groupBy(people, 'age'));

// Exercise 7: Retry with Exponential Backoff
// Create a retry function with exponential backoff
console.log("\nExercise 7: Retry with Exponential Backoff");
async function retryWithBackoff(fn, maxAttempts = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) throw error;
            const backoffDelay = delay * Math.pow(2, attempt - 1);
            console.log(`Attempt ${attempt} failed, retrying in ${backoffDelay}ms...`);
            await new Promise(resolve => setTimeout(resolve, backoffDelay));
        }
    }
}

// Demo (commented out to avoid actual delays)
// retryWithBackoff(() => Promise.reject("Error"), 3, 100);

// Exercise 8: Pipe Function
// Create a pipe function that composes functions left to right
console.log("\nExercise 8: Pipe Function");
function pipe(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = pipe(addOne, double, square);
console.log("pipe(addOne, double, square)(3):", transform(3)); // ((3 + 1) * 2)^2 = 64

// Exercise 9: Throttle Function
// Create a throttle function that limits execution frequency
console.log("\nExercise 9: Throttle Function");
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledLog = throttle((msg) => console.log(msg), 1000);
// throttledLog("First"); // Will execute
// throttledLog("Second"); // Will be ignored if within 1 second

// Exercise 10: Array Intersection
// Find common elements between arrays
console.log("\nExercise 10: Array Intersection");
function intersection(...arrays) {
    if (arrays.length === 0) return [];
    return arrays.reduce((acc, arr) => 
        acc.filter(item => arr.includes(item))
    );
}

console.log("Intersection:", 
    intersection([1, 2, 3, 4], [2, 3, 5], [2, 3, 6]));

// Exercise 11: Object Path Getter
// Get nested object value by path
console.log("\nExercise 11: Get Object Path");
function getPath(obj, path, defaultValue = undefined) {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
        result = result?.[key];
        if (result === undefined) return defaultValue;
    }
    
    return result;
}

const obj = { a: { b: { c: 42 } } };
console.log("getPath(obj, 'a.b.c'):", getPath(obj, 'a.b.c'));
console.log("getPath(obj, 'a.b.x', 'default'):", getPath(obj, 'a.b.x', 'default'));

// Exercise 12: Custom Event Emitter
// Create a simple event emitter
console.log("\nExercise 12: Event Emitter");
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    
    off(event, listenerToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event]
                .filter(listener => listener !== listenerToRemove);
        }
    }
}

const emitter = new EventEmitter();
emitter.on('greet', (name) => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'Alice');

// Exercise 13: LRU Cache
// Implement a Least Recently Used cache
console.log("\nExercise 13: LRU Cache");
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

const cache = new LRUCache(2);
cache.put(1, 'a');
cache.put(2, 'b');
console.log("Get 1:", cache.get(1));
cache.put(3, 'c'); // Evicts key 2
console.log("Get 2:", cache.get(2)); // Returns -1 (not found)
