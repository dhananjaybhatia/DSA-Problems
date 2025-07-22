//Linear Search
// find the 1st occurance of the element inside the array.

function firstOccurance(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      console.log(`First Occurrence of ${k} in the array is: ${i}`);
      return i;
    }
  }
  console.log(`${k} does not exist inside the given array`);
  return -1;
}

const arr = [2, 4, 1, 5, 0]; // unsorted array
const k = 5;
firstOccurance(arr, k);

