function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);
  console.log(answer);
  
  let prefix = 1;

  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
// [1, 2, 3, 4] 
// i = 0
// ans[i] = 1 = prefix = 1
// prefic *1
// 1
console.log(nums);

  let suffix = 1;

  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
