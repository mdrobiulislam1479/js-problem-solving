// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
