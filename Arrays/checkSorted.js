// check if array is sorted from smallest to largest (ascending) or not?

//for ascending
function isSortedAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

arr = [1, 2, 2, 4];
console.log(isSortedAsc(arr));

//for descending array
function isSortedDsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return true;
  }
  return false;
}

arr = [4, 2, 2, 1];
console.log(isSortedDsc(arr));
