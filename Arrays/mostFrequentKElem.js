//Given an integer array nums and an integer k, return the k most frequent elements within the array. Also means k value is the top k numbers frequently occured.

//using hashMap
// function mostFrequentKElement(arr, k) {
//   const res = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (res.has(num)) {
//       res.set(num, res.get(num) + 1);
//     } else {
//       res.set(num, 1);
//     }
//   }
//   const sorted = [...res.entries()].sort((a, b) => b[1] - a[1]);
//   return sorted.slice(0, k).map((entry) => entry[0]);
// }

// arr = [1, 1, 2, 2, 3, 4, 5, 3, 4, 1];
// k = 2;

// console.log(mostFrequentKElement(arr, k));

//using Object
function mostFrequentKElement(arr, k) {
  const res = {};

  for (const a of arr) {
    res[a] = (res[a] || 0) + 1;
  }
  const count = Object.entries(res)
    .sort((a, b) => b - a)
    .slice(0, k)
    .map(([key, _]) => Number(key));
  return count;
}

arr = [1, 1, 2, 2, 3, 4, 5, 3, 4, 1];
k = 2;
console.log(mostFrequentKElement(arr, k));
