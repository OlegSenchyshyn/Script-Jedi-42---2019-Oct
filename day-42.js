// Day 42 - Two Sum Problem

// Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.slice(i + 1).indexOf(target - nums[i]) > -1) {
      return [i, i + 1 + nums.slice(i + 1).indexOf(target - nums[i])];
    }
  }
};
