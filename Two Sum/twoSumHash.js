// use HashMap

function twoSumHash(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i]; // ✅ fix is here
    }
    hashMap.set(nums[i], i);
  }
  return [];
}
const nums = [-1, -2, 3, 7];
const target = 2;
console.log(twoSumHash(nums, target));
