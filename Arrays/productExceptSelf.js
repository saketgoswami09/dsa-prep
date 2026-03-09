// function productExceptSelf(nums) {
//   const n = nums.length;
//   const answer = new Array(n).fill(1);
//   console.log(answer);

//   let prefix = 1;

//   for (let i = 0; i < n; i++) {
//     answer[i] = prefix;
//     prefix *= nums[i];
//   }
// [1,2,3,4]
//  console.log(nums);

//   let suffix = 1;

//   for (let i = n - 1; i >= 0; i--) {
//     answer[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return answer;
// }

// console.log(productExceptSelf([1, 2, 3, 4]));

function productExceptSelf(nums) {
  let n = nums.length;
  let prefix = 1;
  let ans = new Array(n).fill(1);
  console.log(ans);

  for (let i = 0; i < n; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= suffix;
    suffix *= nums[i];
  }
  return ans;
}
console.log(productExceptSelf([1, 2, 3, 4]));
