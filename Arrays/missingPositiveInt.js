// find Kth missing positive number
// sorted in stricktly inc. Order.
// Return the Kth missing positive number missing from the array.

// function missingInt(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= k + count) {
//       count++;
//     }
//   }
//   return k + count;
// }

// arr = [2, 3, 4, 7, 11];
// k = 5;
// console.log(missingInt(arr, k));

function missingInt(arr) {
  let res = [];
  let max = Math.max(...arr); // Find the biggest number in the array
  console.log(max);
  for (let i = 0; i <= max; i++) {
    if (!arr.includes(i)) {
      res.push(i);
    }
  }

  return res;
}

let arr = [1, 2, 3, 5, 8];
console.log(missingInt(arr)); // Output: [0, 2]
