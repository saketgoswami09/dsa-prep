function sumZero(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === 0) {
      return [left, right];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4 ,- 3, - 2, - 1, 0, 1 ,2 ,3 ,10]));
