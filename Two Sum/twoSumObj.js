const nums = [1, 2, 3, 7];
const target = 5;
console.log(twoSumObj(nums, target));

function twoSumObj(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}
