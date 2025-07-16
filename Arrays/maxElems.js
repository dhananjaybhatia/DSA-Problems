function maxElems(arr) {
  let pos = 0;
  let neg = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    }
    max = Math.max(pos, neg);
  }
  return max;
}

arr = [-3, -2, -1, 0, 1, 2, 3, 4];

console.log(maxElems(arr));
