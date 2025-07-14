function twoSum(nums, target) {
  if (nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // j starts from i + 1 to avoid duplicate pairs and self-sum
      if (nums[i] + nums[j] === target) {
        return [i, j]; // return the indices
      }
    }
  }

  return false; // if no pair is found
}

const nums = [-1, -2, 3, 7];
const target = 2;
console.log(twoSum(nums, target));
