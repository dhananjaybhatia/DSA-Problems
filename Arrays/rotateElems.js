//Rotate elems by K places.

const rotateElems = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop()); // rotate once per iteration
  }
  return arr; // ✅ return after all rotations
};

arr = [1, 2, 3, 4, 5, 6];
k = 3;
console.log(rotateElems(arr, k)); // [4, 5, 6, 1, 2, 3]

// console.log(rotateElems(arr, k));
//Time Complexity
//arr.pop() → O(1) : //Removes last element
//arr.unshift() → O(n) : //Inserts at the beginning → all elements are shifted right

const rotateElemsBetter = function (arr, k) {
  let n = arr.length;
  let deletedArr = arr.splice(n - k); // [4, 5, 6]

  for (let i = 0; i < deletedArr.length; i++) {
    arr.splice(i, 0, deletedArr[i]); // insert at the front
  }

  return arr;
};
arr = [1, 2, 3, 4, 5, 6];
k = 3;
console.log(rotateElemsBetter(arr, k)); // [4, 5, 6, 1, 2, 3]

// splice(startsFromIndex, delete the elems from that index, insert the number of elems)
// For eg: splice(0,2,3)
// arr = [1,2,3,4,5,6]
// splice(i = means start from ith index, 2 means delete 2 elems, 3 add number 3 at that deleted value.
// therefore = [3,3,4,5,6]

//Better Solution:

function bestRotateElems(arr, k) {
  let n = arr.length;
  k = k % n; // handles cases where k > n
  return arr.slice(-k).concat(arr.slice(0, n - k)); //slice(-3) means [4,5,6]
}

arr = [1, 2, 3, 4, 5, 6];
k = 3;
console.log(bestRotateElems(arr, k)); // [4, 5, 6, 1, 2, 3]
//1. arr.slice(-k) //Copies the last k elements
//Time complexity: O(k)
//2. arr.slice(0, n - k) //Copies the first n - k elements
//Time complexity: O(n - k)
//3. .concat(...) //Joins two arrays of size k and n - k
//Time complexity: O(n)

//Space Complexity:
//slice() and concat() both create new arrays So you use O(n) extra space

//Best Solution:
//if you dont have reverse function in language you code.
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateRightInPlace(arr, k) {
  const n = arr.length;
  k = k % n;
  // k= 3% 6 = 3

  reverse(arr, 0, n - 1); // reverse whole array // [6,5,4,3,2,1]
  reverse(arr, 0, k - 1); // reverse first k // [4,5,6,3,2,1]
  reverse(arr, k, n - 1); // reverse remaining n - k  [4,5,6,1,2,3]

  return arr;
}

arr = [1, 2, 3, 4, 5, 6];
k = 3;
console.log(rotateRightInPlace(arr, k)); // [4, 5, 6, 1, 2, 3]

// Time Complexity is O(n) and Space Complexity is O(1)
