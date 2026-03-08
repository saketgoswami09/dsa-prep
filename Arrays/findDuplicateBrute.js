function findDuplicateBrute(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
}
// Time: O(n log n), Space: O(1)


function findDuplicateHashSet(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return num; // deja vu!
    seen.add(num);
  }
}



function findDuplicate(nums) {
  // Linked list cycle wala concept use karo
  let slow = nums[0];
  let fast = nums[0];

  // Phase 1: Cycle ke andar milna
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Phase 2: Cycle start dhundhna
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;