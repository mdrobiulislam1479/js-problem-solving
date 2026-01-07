// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

let str = "programming";
let vowels = "AEIOU";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i].toUpperCase())) {
    count++;
  }
}

console.log(count);
