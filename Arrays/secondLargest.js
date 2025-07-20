//Find Second Largest element in an array.

function secondLargest(arr) {
  if (arr.length < 2) return false;

  largest = -Infinity;
  secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

arr = [3, 2, 7, 1, 7, 7];
console.log(secondLargest(arr));
