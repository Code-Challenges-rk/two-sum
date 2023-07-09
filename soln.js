/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let c = i + 1; c < nums.length; c++) {
      sum = nums[i] + nums[c];
      if (sum === target) return [i, c];
    }
  }
  return [];
};

console.log(twoSum([2, 1, 7, 15, 9], 16));

console.log(twoSum([3, 2, 4], 6));
