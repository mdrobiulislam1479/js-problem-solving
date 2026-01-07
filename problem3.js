// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

let str1 = "madam";
let reversed1 = str1.split("").reverse().join("");
let result1 = str1 === reversed1;

let str2 = "hello";
let reversed2 = str2.split("").reverse().join("");
let result2 = str2 === reversed2;

console.log(result1, result2);
