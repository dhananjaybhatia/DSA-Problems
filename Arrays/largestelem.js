//Find the largest element in the array.

function largestElem(arr) {
  if (!arr.length) return false;
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

arr = [3, 2, 5, 1, 7, 2];
console.log(largestElem(arr));
