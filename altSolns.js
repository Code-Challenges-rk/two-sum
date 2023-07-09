function twoSum(nums, target) {
  const numMap = new Map(); // Hash map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    // console.log("Diff", diff);

    if (numMap.has(diff)) {
    //   console.log("numMap", numMap);
      const diffIndex = numMap.get(diff);
    //   console.log(diffIndex);
      return [diffIndex, i];
    }

    numMap.set(nums[i], i);
  }

  // No solution found
  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
// console.log(result); // Output: [0, 1]

let twoS = function (nums, target) {
  const n = nums.length;
  const a = [...nums];

  nums.sort((a, b) => a - b);

  let l = 0;
  let r = n - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      break;
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  const v = [];

  for (let i = 0; i < n; i++) {
    if (nums[l] === a[i]) {
      v.push(i);
    } else if (nums[r] === a[i]) {
      v.push(i);
    }
  }

  return v;
};

const ns = [2, 11, 7, 15];
// const ns = [3,4,2]
const tgt = 9;
const res = twoS(ns, tgt);
console.log(res);
