// function maxElems(arr) {
//   let pos = 0;
//   let neg = 0;
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       neg++;
//     } else if (arr[i] > 0) {
//       pos++;
//     }
//     max = Math.max(pos, neg);
//   }
//   return max;
// }

// arr = [-3, -2, -1, 0, 1, 2, 3, 4];

// console.log(maxElems(arr));

function maxNums(arr) {
  const n = arr.length;

  let left = 0,
    right = n - 1,
    firstPos = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); //mid is 4 now
    //arr[mid] is 1
    if (arr[mid] > 0) {
      firstPos = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  (left = 0), (right = n - 1), (lastNeg = -1);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); //mid is 4 now
    if (arr[mid] < 0) {
      lastNeg = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  const posCount = n - firstPos;
  const negCount = lastNeg + 1;

  return Math.max(posCount, negCount);
}

arr = [-3, -2, -1, 0, 1, 2];

console.log(maxNums(arr));
