// ====================================
// Exercises: Beginner Level
// ====================================

console.log("=== Beginner Exercises ===\n");

// Exercise 1: FizzBuzz
// Write a function that prints numbers from 1 to n
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of both, print "FizzBuzz"
console.log("Exercise 1: FizzBuzz");
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);

// Exercise 2: Palindrome Checker
// Write a function that checks if a string is a palindrome
console.log("\nExercise 2: Palindrome Checker");
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log("racecar:", isPalindrome("racecar"));
console.log("hello:", isPalindrome("hello"));
console.log("A man, a plan, a canal: Panama:", isPalindrome("A man, a plan, a canal: Panama"));

// Exercise 3: Array Sum
// Write a function that returns the sum of all numbers in an array
console.log("\nExercise 3: Array Sum");
function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of [1, 2, 3, 4, 5]:", arraySum([1, 2, 3, 4, 5]));

// Exercise 4: Find Maximum
// Write a function that finds the maximum number in an array
console.log("\nExercise 4: Find Maximum");
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Max of [3, 7, 2, 9, 1]:", findMax([3, 7, 2, 9, 1]));

// Exercise 5: Reverse String
// Write a function that reverses a string
console.log("\nExercise 5: Reverse String");
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed 'hello':", reverseString("hello"));

// Exercise 6: Count Vowels
// Write a function that counts vowels in a string
console.log("\nExercise 6: Count Vowels");
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log("Vowels in 'hello world':", countVowels("hello world"));

// Exercise 7: Remove Duplicates
// Write a function that removes duplicates from an array
console.log("\nExercise 7: Remove Duplicates");
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Remove duplicates from [1, 2, 2, 3, 4, 4, 5]:", 
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Exercise 8: Factorial
// Write a function that calculates the factorial of a number
console.log("\nExercise 8: Factorial");
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Exercise 9: Title Case
// Write a function that converts a string to title case
console.log("\nExercise 9: Title Case");
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log("Title case 'hello world':", titleCase("hello world"));

// Exercise 10: Chunk Array
// Write a function that splits an array into chunks of specified size
console.log("\nExercise 10: Chunk Array");
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log("Chunk [1,2,3,4,5,6,7,8] by 3:", 
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Exercise 11: Flatten Array
// Write a function that flattens a nested array
console.log("\nExercise 11: Flatten Array");
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log("Flatten [1, [2, 3], [4, [5, 6]]]:", 
    flattenArray([1, [2, 3], [4, [5, 6]]]));

// Exercise 12: Is Anagram
// Write a function that checks if two strings are anagrams
console.log("\nExercise 12: Is Anagram");
function isAnagram(str1, str2) {
    const clean = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return clean(str1) === clean(str2);
}
console.log("'listen' and 'silent':", isAnagram("listen", "silent"));
console.log("'hello' and 'world':", isAnagram("hello", "world"));

// Exercise 13: Capitalize Words
// Write a function that capitalizes the first letter of each word
console.log("\nExercise 13: Capitalize Words");
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log("Capitalize 'the quick brown fox':", 
    capitalizeWords("the quick brown fox"));

// Exercise 14: Most Frequent Element
// Write a function that finds the most frequent element in an array
console.log("\nExercise 14: Most Frequent Element");
function mostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequentItem = null;
    
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    });
    
    return mostFrequentItem;
}
console.log("Most frequent in [1, 2, 2, 3, 3, 3, 4]:", 
    mostFrequent([1, 2, 2, 3, 3, 3, 4]));

// Exercise 15: Generate Random String
// Write a function that generates a random string of specified length
console.log("\nExercise 15: Generate Random String");
function randomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
console.log("Random string (10 chars):", randomString(10));
