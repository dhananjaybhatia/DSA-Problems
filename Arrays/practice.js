//Practice
//Input: arr = [-7, -5, -2, 0, 1, 3, 6];
//Output: 3;

function maxCount(arr) {
  let l = 0,
    r = arr.length - 1,
    firstPositive = 0,
    lastNeg = -1;

  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] > 0) {
      firstPositive = middle;
      r = middle - 1;
    } else {
      l = middle + 1;
    }
  }
  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] < 0) {
      lastNeg = middle;
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }

  const posCount = arr.length - firstPositive;
  const negCount = lastNeg + 1;

  const res = Math.max(posCount, negCount);
  return res;
}
arr = [-7, -5, -2, 0, 1, 3, 6];

console.log(maxCount(arr));
