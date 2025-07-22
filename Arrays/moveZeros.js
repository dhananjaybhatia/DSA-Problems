//Move all 0's to the end of the array

function moveZeros(arr) {
  temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  let zeroCount = arr.length - temp.length;
  for (let i = 0; i < zeroCount; i++) {
    temp.push(0);
  }

  return temp;
}

arr = [1, 0, 2, 0, 3];
console.log(moveZeros(arr));

//Best Solution
function moveZerosBetter(arr) {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
  }
  return arr;
}

arr = [1, 2, 2, 3, 3];
console.log(moveZerosBetter(arr));
