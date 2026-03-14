function largest(nums) {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
        largest = nums[i];
    }
    
  }
  return largest
}


console.log(largest([1,2,3,4,5,44,66,98]));
