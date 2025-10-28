// JavaScript Journey - Main Entry Point
// This file demonstrates the basics covered in this learning repository

console.log("=".repeat(50));
console.log("Welcome to JavaScript Journey!");
console.log("=".repeat(50));

// 1. Variables
console.log("\n--- Variables ---");
const learningJS = true;
let currentTopic = "Basics";
console.log(`Learning JS: ${learningJS}`);
console.log(`Current Topic: ${currentTopic}`);

// 2. Data Types
console.log("\n--- Data Types ---");
const name = "JavaScript Learner";
const year = 2025;
const isExciting = true;
console.log(`Name: ${name} (${typeof name})`);
console.log(`Year: ${year} (${typeof year})`);
console.log(`Is Exciting: ${isExciting} (${typeof isExciting})`);

// 3. Arrays
console.log("\n--- Arrays ---");
const topics = ["Variables", "Functions", "Arrays", "Objects", "Loops"];
console.log(`Topics to learn: ${topics.join(", ")}`);
console.log(`Total topics: ${topics.length}`);

// 4. Objects
console.log("\n--- Objects ---");
const course = {
  name: "JavaScript Fundamentals",
  duration: "4 weeks",
  level: "Beginner",
  topics: topics.length
};
console.log(`Course: ${course.name}`);
console.log(`Duration: ${course.duration}`);
console.log(`Level: ${course.level}`);

// 5. Functions
console.log("\n--- Functions ---");
const greet = (name) => `Hello, ${name}!`;
const getProgress = (completed, total) => `${Math.round((completed / total) * 100)}%`;

console.log(greet("Future JavaScript Developer"));
console.log(`Progress: ${getProgress(2, topics.length)}`);

// 6. Control Flow
console.log("\n--- Control Flow ---");
const completedTopics = 2;
if (completedTopics < topics.length) {
  console.log("Keep learning! You're making progress!");
} else {
  console.log("Congratulations! You've completed all topics!");
}

// 7. Loops
console.log("\n--- Loops ---");
console.log("Next topics to learn:");
for (let i = completedTopics; i < Math.min(completedTopics + 3, topics.length); i++) {
  console.log(`  ${i + 1}. ${topics[i]}`);
}

console.log("\n" + "=".repeat(50));
console.log("Happy Learning!");
console.log("=".repeat(50));
