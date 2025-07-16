// search the index in the array for the target if exist. Else return -1.

// Brut force: This is linear search.
// Time Compexity - O(n) and n is the number of elements inside the array which is 6. You can also say O(6)
// Space Complexity - O(1) because we did not create an extra space.

// function searchT(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     if (k === arr[i]) return i;
//   }
//   return -1;
// }

// arr = [1, 2, 3, 4, 5, 6];
// k = 2;
// console.log(searchT(arr, k));

// Binary Search: Array must be sorted.
// exponential reduction - then - O(logn)
function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (k === arr[middle]) {
      return middle;
    } else if (k < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return "Not Found";
}

arr = [1, 2, 3, 4, 5, 6];
k = 6;
console.log(binarySearch(arr, k));
