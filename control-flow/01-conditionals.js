// Control Flow - Conditional Statements

// 1. if statement
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// 2. if-else statement
const temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside");
} else {
  console.log("It's nice weather");
}

// 3. if-else if-else
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. Ternary operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// 5. Switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Midweek day");
}

// 6. Logical operators
const hasLicense = true;
const hasInsurance = true;

if (hasLicense && hasInsurance) {
  console.log("You can drive");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Day off!");
}

// 7. Nullish coalescing operator (??)
const username = null;
const displayName = username ?? "Guest";
console.log("Display name:", displayName);
