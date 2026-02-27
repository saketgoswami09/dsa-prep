//  Q1. Two Sum — Array mein do numbers find karo jinka sum target ho
// **Problem:** `[2, 7, 11, 15]`, target = `9` → `[0, 1]` (kyunki `2 + 7 = 9`)

// bruteForce
function twoSum(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));


// optimal
function twooSum(nums, target) {
  const map = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; 

    if (map.has(complement)) {
      return [map.get(complement), i]; 
    }
    map.set(nums[i], i); 
  }
}

console.log(twooSum([2, 7, 11, 15], 9));
