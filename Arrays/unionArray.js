//Union of 2 sorted arrays.
//Union dont have duplicates.

//Set removes duplicates and maintain the order of the set. If order is unsorted then it will maintain unsorted set. It only maintains insertion order

function unionArray(arr1, arr2) {
  const res = new Set([...arr1, ...arr2]);
  return [...res].sort((a, b) => a - b); // if you want to sort them as well
}

arr1 = [1, 1, 3, 4, 5];
arr2 = [2, 12, 13, 55];
console.log(unionArray(arr1, arr2));

//optimal
//2 pointer
//explanation:
// 1. first we compare if arr1[i] is smaller than arr[j] if so then check if that smaller number already exist inside res[]. if not then add it.
//2. will do the same check if arr[j] is smaller than arr[i] ......
//3. if both i and j are equal then just add from any array in our case we added from arr1[i]
// next while loop check if 1st array is bigger than no point comparing arrays with each other. just add the remaining elements in the res but make sure they dont previously exist.
//Time	O(n + m)
//Space	O(n + m)

function unionSorted(arr1, arr2) {
  let i = 0,
    j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
      j++;
    } else {
      // Both are equal
      if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
    j++;
  }

  return res;
}

arr1 = [1, 1, 3, 4, 6];
arr2 = [2, 5, 13, 55];
console.log(unionSorted(arr1, arr2));
