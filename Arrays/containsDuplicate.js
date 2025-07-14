//Contains Dups:
// Given an integer array "nums", return True if duplicates else return false:
// Bruteforce - iterate on every element and compare with the other element - timeComplexity would be O
// 2 ways of doing it -

// function hasDuplicates(arr) {
//   arr.sort((a, b) => a - b); // Sort the array - sort functions time complexity is "nlogn"

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true; // Duplicate found
//     }
//   }

//   return false; // No duplicates
// }

// const nums = [1, 3, 5, -3];
// console.log(hasDuplicates(nums)); // true

// --------------------

// // using a hashSet - its a data structure which stores unique values.

// function hasDuplicates(arr) {
//   const seen = new Set();

//   for (let num of arr) {
//     if (seen.has(num)) {
//       return true;
//     }
//     seen.add(num); // 👈 Important: add the number to the set
//   }
//   return false;
// }

// const nums = [1, 3, 5, 3];
// console.log(hasDuplicates(nums)); // Output: true
