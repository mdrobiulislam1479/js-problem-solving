// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function largestNumber(numbers) {
  let maxNumber = Math.max(...numbers);
  console.log(maxNumber);
}

largestNumber([5, 1, 9, 3]);
