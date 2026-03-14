function twoSum(nums, target) {
  let n = nums.length - 1;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum([2, 7, 9, 11, 23], 16));
