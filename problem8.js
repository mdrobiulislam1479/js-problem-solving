// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

let str = "hello world";
let arr = str.split(" ");
let capitalized = arr.map((word) => word[0].toUpperCase() + word.slice(1));

let result = capitalized.join(" ");

console.log(result);
