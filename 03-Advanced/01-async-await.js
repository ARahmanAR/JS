// ====================================
// Asynchronous JavaScript
// ====================================

// 1. setTimeout and setInterval
// -----------------------------
console.log("=== setTimeout & setInterval ===");

console.log("Start");

// setTimeout - execute once after delay
setTimeout(() => {
    console.log("This runs after 1 second");
}, 1000);

// setInterval - execute repeatedly
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 3) {
        clearInterval(intervalId); // Stop the interval
    }
}, 500);

console.log("End (this runs first)");

// 2. Callbacks
// ------------
console.log("\n=== Callbacks ===");

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Callback data:", data);
    }
});

// Callback Hell example
function step1(callback) {
    setTimeout(() => callback("Step 1 complete"), 500);
}

function step2(callback) {
    setTimeout(() => callback("Step 2 complete"), 500);
}

function step3(callback) {
    setTimeout(() => callback("Step 3 complete"), 500);
}

// This creates "callback hell" or "pyramid of doom"
step1((result1) => {
    console.log(result1);
    step2((result2) => {
        console.log(result2);
        step3((result3) => {
            console.log(result3);
        });
    });
});

// 3. Promises
// -----------
console.log("\n=== Promises ===");

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    }, 1000);
});

// Consuming a promise
myPromise
    .then(result => {
        console.log(result);
        return "Next step";
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed");
    });

// 4. Promise Chaining
// -------------------
console.log("\n=== Promise Chaining ===");

function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John" });
        }, 500);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 500);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Comment 1" },
                { id: 2, text: "Comment 2" }
            ]);
        }, 500);
    });
}

// Promise chain
fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Chain error:", error);
    });

// 5. Promise Static Methods
// -------------------------
console.log("\n=== Promise Static Methods ===");

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));
const promise3 = Promise.resolve(42);

// Promise.all - waits for all promises
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Promise.all:", values); // [3, "foo", 42]
    });

// Promise.race - returns first settled promise
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("slow"), 500)),
    new Promise(resolve => setTimeout(() => resolve("fast"), 100))
])
    .then(value => {
        console.log("Promise.race:", value); // "fast"
    });

// Promise.allSettled - waits for all, returns all results
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("error"),
    Promise.resolve(3)
])
    .then(results => {
        console.log("Promise.allSettled:", results);
    });

// Promise.any - returns first fulfilled promise
Promise.any([
    Promise.reject("error1"),
    Promise.resolve("success"),
    Promise.resolve("success2")
])
    .then(value => {
        console.log("Promise.any:", value); // "success"
    });

// 6. Async/Await
// --------------
console.log("\n=== Async/Await ===");

async function getUserData() {
    try {
        const user = await fetchUser(1);
        console.log("Async User:", user);
        
        const posts = await fetchPosts(user.id);
        console.log("Async Posts:", posts);
        
        const comments = await fetchComments(posts[0].id);
        console.log("Async Comments:", comments);
        
        return { user, posts, comments };
    } catch (error) {
        console.error("Async error:", error);
    }
}

getUserData().then(data => {
    console.log("All data retrieved:", data);
});

// 7. Parallel Async Operations
// ----------------------------
console.log("\n=== Parallel Async Operations ===");

async function fetchMultipleUsers() {
    try {
        // Sequential (slower)
        console.time("Sequential");
        const user1 = await fetchUser(1);
        const user2 = await fetchUser(2);
        console.timeEnd("Sequential");
        
        // Parallel (faster)
        console.time("Parallel");
        const [user3, user4] = await Promise.all([
            fetchUser(3),
            fetchUser(4)
        ]);
        console.timeEnd("Parallel");
        
        return [user1, user2, user3, user4];
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchMultipleUsers();

// 8. Error Handling with Async/Await
// ----------------------------------
console.log("\n=== Error Handling ===");

async function riskyOperation() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Something went wrong")), 500);
        });
        return result;
    } catch (error) {
        console.error("Caught error:", error.message);
        // Return default value or rethrow
        return null;
    } finally {
        console.log("Cleanup operations");
    }
}

riskyOperation();

// 9. Creating Utility Functions
// -----------------------------
console.log("\n=== Utility Functions ===");

// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function delayedLog() {
    console.log("Start");
    await delay(1000);
    console.log("After 1 second");
    await delay(1000);
    console.log("After 2 seconds");
}

delayedLog();

// Retry function
async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) {
                throw error;
            }
            console.log(`Attempt ${attempt} failed, retrying...`);
            await delay(1000);
        }
    }
}

// Timeout wrapper
function timeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Timeout")), ms)
        )
    ]);
}

// 10. Async Generators
// --------------------
console.log("\n=== Async Generators ===");

async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function consumeAsyncGenerator() {
    for await (const value of asyncGenerator()) {
        console.log("Async generated value:", value);
    }
}

consumeAsyncGenerator();

// 11. Event Loop Example
// ----------------------
console.log("\n=== Event Loop ===");

console.log("1: Sync");

setTimeout(() => {
    console.log("2: Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Promise");
});

console.log("4: Sync");

// Output order: 1, 4, 3, 2
// Promises (microtasks) execute before setTimeout (macrotasks)

// 12. Fetch API Example (conceptual)
// ----------------------------------
console.log("\n=== Fetch API Pattern ===");

async function fetchUserFromAPI() {
    try {
        // In a real browser/Node environment:
        // const response = await fetch('https://api.example.com/users/1');
        // const data = await response.json();
        
        // Simulated fetch
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    ok: true,
                    json: () => Promise.resolve({ id: 1, name: "API User" })
                });
            }, 500);
        });
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

fetchUserFromAPI();
