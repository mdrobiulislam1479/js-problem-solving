// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  let result = str === reversed;

  console.log(result);
}

palindrome("madam");
palindrome("hello");
