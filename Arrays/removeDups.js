//Remove Dups from the array.

//this will return an array.
function removeDups(arr) {
  const uniqueArr = [...new Set(arr)];
  console.log(uniqueArr); // Output:[1,2,3]
}

arr = [1, 1, 3, 2, 2, 3, 3];

console.log(removeDups(arr));

//this will return an object - by nature set returns an object unless to make it into an array
function removeDuplicate(arr) {
  const uniqueArr = new Set(arr);
  console.log(uniqueArr); // Output: {1,2,3}
}

arr = [1, 1, 3, 2, 2, 3, 3];

console.log(removeDuplicate(arr));

// this must have a sorted array in ascending order.
//use loop
function removeDupsUsingLoop(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

arr = [1, 1, 2, 2, 2, 3, 3];

console.log(removeDupsUsingLoop(arr));

//2Pointer approach
//Must be sorted array

function removeDupsTwoPointer(arr) {
  if (arr.length === 0) return false;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}
arr = [1, 1, 2, 2, 2, 3, 3];

console.log(removeDupsTwoPointer(arr));
