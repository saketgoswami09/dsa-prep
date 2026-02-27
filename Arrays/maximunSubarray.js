// Q2. Maximum Subarray (Kadane's Algorithm)

// **Problem:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` → `6` (subarray: `[4, -1, 2, 1]`)

// Brute Force:

function maxSubarrayBrute(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]
      maxSum = Math.max(maxSum,currentSum)
    }
  }
  return maxSum
}

console.log(maxSubarrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's Algorithm
function maxSubarray(nums) {
  let maxSum = nums[0];    
  let currentSum = nums[0]; 

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}