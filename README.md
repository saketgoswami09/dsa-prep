# 🔥 DSA Interview Questions — Fresher to Mid Level
### Hinglish mein samjho, Interview mein crack karo!

> **Guide kaise use karein:**
> - Har question ka **Brute Force** aur **Optimal Solution** dono diya hai
> - **Hinglish explanation** taaki concepts crystal clear ho jaayein
> - **Tips & Tricks** jo interview mein kaam aate hain
> - **Time & Space Complexity** har solution ke saath
> - ⭐ = Bahut zyada puchha jaata hai

---

## 📋 Table of Contents

1. [Arrays](#1-array-questions)
2. [Strings](#2-string-questions)
3. [Hashing & Maps](#3-hashing--maps)
4. [Two Pointers](#4-two-pointers)
5. [Sliding Window](#5-sliding-window)
6. [Recursion & Backtracking](#6-recursion--backtracking)
7. [Sorting & Searching](#7-sorting--searching)
8. [Linked List](#8-linked-list)
9. [Stack & Queue](#9-stack--queue)
10. [Trees](#10-trees)
11. [Dynamic Programming](#11-dynamic-programming)
12. [Interview Tips & Tricks](#12-interview-tips--tricks)

---

## 1. Array Questions

---

### ⭐ Q1. Two Sum — Array mein do numbers find karo jinka sum target ho

**Problem:** `[2, 7, 11, 15]`, target = `9` → `[0, 1]` (kyunki `2 + 7 = 9`)

---

**🐌 Brute Force:**
Har ek pair check karo — double loop lagao

```js
function twoSumBrute(nums, target) {
  // i aur j har possible pair check karega
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
// Time: O(n²) — har element ke liye baaki sab check karta hai
// Space: O(1)
```

**🚀 Optimal (HashMap):**
```js
function twoSum(nums, target) {
  const map = new Map(); // value → index store karega

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // mujhe kya chahiye?

    if (map.has(complement)) {
      return [map.get(complement), i]; // mil gaya!
    }
    map.set(nums[i], i); // nahi mila, toh store kar lo
  }
}
// Time: O(n) — ek baar hi loop
// Space: O(n) — map mein store ho raha hai
```

**💡 Hinglish Explanation:**
> Socho ki tum ek dukaan mein ho. Target = 9, current number = 2. Toh tumhe chahiye `9 - 2 = 7`. Map se poochho "kya tumhare paas 7 hai?" — agar haan, return karo. Nahi toh 2 ko map mein daalo aur aage badho!

**🎯 Interview Tip:** HashMap wala solution seedha batao. Brute force sirf tabhi batao jab interviewer pooche "aur koi tarika?"

---

### ⭐ Q2. Maximum Subarray (Kadane's Algorithm)

**Problem:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` → `6` (subarray: `[4, -1, 2, 1]`)

---

**🐌 Brute Force:**
```js
function maxSubarrayBrute(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}
// Time: O(n²)
// Space: O(1)
```

**🚀 Optimal (Kadane's Algorithm):**
```js
function maxSubarray(nums) {
  let maxSum = nums[0];    // abtak ka best
  let currentSum = nums[0]; // abhi tak ka running sum

  for (let i = 1; i < nums.length; i++) {
    // Decision: pichla sum sath rakhun ya fresh start karuin?
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
// Time: O(n)
// Space: O(1)
```

**💡 Hinglish Explanation:**
> Kadane's ek simple socha hai — agar running sum negative ho jaaye, toh "Bhai, fresh start karo!" Aur har step pe track karo ki abtak ka best kya tha.

**Dry Run:**
```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
curr:   -2  1  -2  4   3  5  6   1  5
max:    -2  1   1  4   4  5  6   6  6   ← Answer: 6 ✅
```

---

### ⭐ Q3. Move Zeroes to End

**Problem:** `[0, 1, 0, 3, 12]` → `[1, 3, 12, 0, 0]`

---

**🐌 Brute Force:**
```js
function moveZeroesBrute(nums) {
  const nonZeroes = nums.filter(n => n !== 0); // non-zero nikalo
  const zeroes = new Array(nums.length - nonZeroes.length).fill(0);
  return [...nonZeroes, ...zeroes];
}
// Time: O(n), Space: O(n) — extra array use ho raha hai
```

**🚀 Optimal (Two Pointer — In Place):**
```js
function moveZeroes(nums) {
  let insertPos = 0; // yahan next non-zero aayega

  // Step 1: Saare non-zeros aage rakho
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  // Step 2: Baaki positions mein zeros bharo
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
  return nums;
}
// Time: O(n)
// Space: O(1) — in-place!
```

**💡 Hinglish Explanation:**
> Socho ek train hai. Non-zero passengers ko aage ki seats dete jao. Jab sab aage aa jaayein, peeche wali seats mein 0 bhar do!

---

### ⭐ Q4. Find Duplicate Number

**Problem:** `[1, 3, 4, 2, 2]` → `2`

---

**🐌 Brute Force (Sorting):**
```js
function findDuplicateBrute(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
}
// Time: O(n log n), Space: O(1)
```

**✅ Better (HashSet):**
```js
function findDuplicateHashSet(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return num; // deja vu!
    seen.add(num);
  }
}
// Time: O(n), Space: O(n)
```

**🚀 Optimal (Floyd's Cycle Detection):**
```js
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
}
// Time: O(n), Space: O(1) — 🔥 Best!
```

**💡 Hinglish Tip:** HashSet waala interview mein mostly acceptable hai. Floyd's sirf senior roles mein bolna padta hai.

---

### ⭐ Q5. Rotate Array by K steps

**Problem:** `[1,2,3,4,5,6,7]`, k=3 → `[5,6,7,1,2,3,4]`

---

**🚀 Optimal (Reverse Trick):**
```js
function rotate(nums, k) {
  k = k % nums.length; // k > length ho toh handle karo
  reverse(nums, 0, nums.length - 1); // puri array ulti karo
  reverse(nums, 0, k - 1);           // pehle k elements ulte karo
  reverse(nums, k, nums.length - 1); // baaki ulte karo
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // swap
    start++;
    end--;
  }
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Explanation:**
> **Reverse Trick** yaad karo: Poori palto → Pehla hissa palto → Doosra hissa palto. Magic!
> `[1,2,3,4,5,6,7]` → `[7,6,5,4,3,2,1]` → `[5,6,7,4,3,2,1]` → `[5,6,7,1,2,3,4]` ✅

---

### Q6. Best Time to Buy and Sell Stock

**Problem:** `[7,1,5,3,6,4]` → `5` (1 mein khareedo, 6 mein becho)

---

**🚀 Optimal (Greedy):**
```js
function maxProfit(prices) {
  let minPrice = Infinity; // abtak ka sabse sasta
  let maxProfit = 0;       // abtak ka best profit

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price; // naya minimum mila!
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice; // naya profit!
    }
  }
  return maxProfit;
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Tip:** Left se chalte jao, minimum track karo. Har din dekho "aaj bechun toh kitna milega?" — agar best se zyada ho toh update karo.

---

## 2. String Questions

---

### ⭐ Q7. Valid Palindrome

**Problem:** `"A man, a plan, a canal: Panama"` → `true`

---

**🚀 Optimal (Two Pointer):**
```js
function isPalindrome(s) {
  // Sirf letters aur numbers rakho, lowercase karo
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
// Time: O(n), Space: O(n) — cleaned string ke liye
```

**💡 Hinglish Explanation:**
> Pehle string saaf karo (sirf alpha-numeric, lowercase). Phir do pointers — ek left se, ek right se. Agar koi bhi mismatch ho, false. Nahi toh palindrome hai!

---

### ⭐ Q8. Valid Anagram

**Problem:** `"anagram"`, `"nagaram"` → `true`

---

**🚀 Optimal (Character Count):**
```js
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1; // s se add karo
  }

  for (const char of t) {
    if (!count[char]) return false; // t mein extra char
    count[char]--;
  }
  return true;
}
// Time: O(n), Space: O(1) — max 26 chars
```

**💡 Hinglish Tip:** Anagram = same characters, different order. Count karo dono ke characters. Match karo!

---

### ⭐ Q9. Longest Common Prefix

**Problem:** `["flower","flow","flight"]` → `"fl"`

---

**🚀 Optimal:**
```js
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0]; // pehle word ko prefix maan lo

  for (let i = 1; i < strs.length; i++) {
    // Jab tak current word prefix se start na kare, kaato
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // ek character kaato
      if (!prefix) return "";
    }
  }
  return prefix;
}
// Time: O(n*m) — n strings, m prefix length
```

**💡 Hinglish Explanation:**
> Pehle word ko prefix maan lo. Phir har word se compare karo. Agar match nahi, prefix ka aakhri character kaato. Jab tak match ho ya prefix khali ho!

---

### Q10. Count and Say

**Problem:** `n = 4` → `"1211"` (1 → 11 → 21 → 1211)

---

```js
function countAndSay(n) {
  let result = "1";

  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;

    for (let j = 1; j < result.length; j++) {
      if (result[j] === result[j - 1]) {
        count++;
      } else {
        next += count + result[j - 1]; // kitne baar + kya character
        count = 1;
      }
    }
    next += count + result[result.length - 1];
    result = next;
  }
  return result;
}
```

**💡 Hinglish:** "1" ko dekho — "ek 1 hai" → "11". "11" ko dekho — "do 1 hain" → "21". "21" ko dekho — "ek 2, ek 1" → "1211" 😄

---

## 3. Hashing & Maps

---

### ⭐ Q11. Group Anagrams

**Problem:** `["eat","tea","tan","ate","nat","bat"]` → `[["eat","tea","ate"],["tan","nat"],["bat"]]`

---

```js
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Har anagram ka sorted version same hoga!
    const key = str.split('').sort().join(''); // "eat" → "aet"

    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return [...map.values()];
}
// Time: O(n * k log k) — k = max string length
// Space: O(n * k)
```

**💡 Hinglish Trick:** Anagram ka sorted version same hoga! `"eat"` sort → `"aet"`, `"tea"` sort → `"aet"` — same key!

---

### ⭐ Q12. First Non-Repeating Character

**Problem:** `"leetcode"` → `0` (index of 'l')

---

```js
function firstUniqChar(s) {
  const count = {};

  // Pehla pass: count karo
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Doosra pass: pehla wala dhundho jiska count 1 ho
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}
// Time: O(n), Space: O(1) — max 26 characters
```

---

## 4. Two Pointers

---

### ⭐ Q13. Three Sum

**Problem:** `[-1, 0, 1, 2, -1, -4]` → `[[-1,-1,2],[-1,0,1]]`

---

**🐌 Brute Force:**
```js
// Triple loop — O(n³) — bahut slow!
for (let i = 0; i < n; i++)
  for (let j = i+1; j < n; j++)
    for (let k = j+1; k < n; k++)
      if (nums[i]+nums[j]+nums[k] === 0) // add to result
```

**🚀 Optimal (Sort + Two Pointer):**
```js
function threeSum(nums) {
  nums.sort((a, b) => a - b); // pehle sort karo!
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Duplicates skip karo
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // Duplicates skip
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;  // sum badhaana hai
      } else {
        right--; // sum ghatana hai
      }
    }
  }
  return result;
}
// Time: O(n²), Space: O(1)
```

**💡 Hinglish Explanation:**
> Sort karo → Fix karo ek number (i) → Baaki do ke liye two-pointer lagao. Sum zyada ho toh right ghatao, kam ho toh left badhao!

---

### Q14. Container With Most Water

**Problem:** `[1,8,6,2,5,4,8,3,7]` → `49`

---

**🚀 Optimal (Two Pointer — Greedy):**
```js
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const water = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, water);

    // Choti wali wall ko aage badhao (badi ko badhaane se fayda nahi)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Trick:** Paani ki matra = choti wall × width. Choti wall ko hilao kyunki badi wall hilane se pani badh nahi sakta!

---

## 5. Sliding Window

---

### ⭐ Q15. Maximum Sum Subarray of Size K

**Problem:** `[2,3,4,1,5]`, k=3 → `8` (3+4+1 = 8, ya 4+1+5=10 — actually 10)

---

**🐌 Brute Force:**
```js
function maxSumBrute(arr, k) {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) sum += arr[j];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
// Time: O(n*k)
```

**🚀 Optimal (Sliding Window):**
```js
function maxSum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Pehli window banao
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;

  // Window slide karo — ek add, ek remove
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // naaya add, puraana remove
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Analogy:**
> Socho ek train ki 3-seater khidki hai. Jab train aage badhti hai, ek naya bahar dikhta hai, ek pichcha chupa jaata hai. Dono baar recalculate karne ki zaroorat nahi — sirf difference nikalo!

---

### ⭐ Q16. Longest Substring Without Repeating Characters

**Problem:** `"abcabcbb"` → `3` ("abc")

---

**🚀 Optimal (Sliding Window + HashMap):**
```js
function lengthOfLongestSubstring(s) {
  const map = new Map(); // char → last seen index
  let maxLen = 0;
  let left = 0; // window ka left end

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // Agar character pehle aaya tha aur window ke andar hai
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1; // left jump karo duplicate ke baad
    }

    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
// Time: O(n), Space: O(min(n, 26))
```

**💡 Hinglish Explanation:**
> Window ke do ends hain — left aur right. Right aage badhta rehta hai. Jab bhi ek repeat milta hai, left ko us character ke baad bhej do. Window ki size = right - left + 1.

**Dry Run:**
```
s = "abcabcbb"
      ^         right=0: 'a', map={a:0}, len=1
       ^        right=1: 'b', map={a:0,b:1}, len=2
        ^       right=2: 'c', map={...,c:2}, len=3
         ^      right=3: 'a' repeat! left = 0+1 = 1, map={a:3,...}, len=3
```

---

### Q17. Minimum Window Substring

**Problem:** `s="ADOBECODEBANC"`, `t="ABC"` → `"BANC"`

---

```js
function minWindow(s, t) {
  const need = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;

  let have = 0;
  const required = Object.keys(need).length;
  const window = {};
  let result = "";
  let minLen = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;

    if (need[c] && window[c] === need[c]) have++;

    // Jab sab mil jaaye, window squeeze karo
    while (have === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        result = s.slice(left, right + 1);
      }
      window[s[left]]--;
      if (need[s[left]] && window[s[left]] < need[s[left]]) have--;
      left++;
    }
  }
  return result;
}
// Time: O(n), Space: O(n)
```

---

## 6. Recursion & Backtracking

---

### ⭐ Q18. Fibonacci Number

**Problem:** `fib(6)` → `8`

---

**🐌 Brute Force (Recursive):**
```js
function fibBrute(n) {
  if (n <= 1) return n;
  return fibBrute(n - 1) + fibBrute(n - 2);
}
// Time: O(2^n) — bahut slow! Ek hi cheez bar bar calculate hoti hai
```

**✅ Better (Memoization):**
```js
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // already calculate kiya?
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
// Time: O(n), Space: O(n)
```

**🚀 Optimal (DP/Iterative):**
```js
function fib(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
// Time: O(n), Space: O(1) 🔥
```

**💡 Hinglish Trick:** Brute force mein same cheez baar baar calculate hoti hai. Memo mein ek baar calculate karo, cache mein rakho. Tab bhi zyada memory. Iterative mein sirf 2 variables!

---

### ⭐ Q19. Permutations of a String/Array

**Problem:** `[1,2,3]` → `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`

---

```js
function permutations(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]); // copy karke push karo
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);                          // choose
      backtrack(current, [...remaining.slice(0, i), ...remaining.slice(i + 1)]); // explore
      current.pop();                                        // unchoose
    }
  }

  backtrack([], nums);
  return result;
}
// Time: O(n! * n), Space: O(n)
```

**💡 Hinglish Explanation:**
> Backtracking = **Choose → Explore → Unchoose**. Ek number uthao, baaki ke saath game khelo, phir rakh do wapis. Yahi pattern har backtracking problem mein hai!

**Backtracking Template:**
```js
function backtrack(state, choices) {
  if (isComplete(state)) {
    result.push(copy of state);
    return;
  }
  for (const choice of choices) {
    makeChoice(choice, state);     // aage badho
    backtrack(state, newChoices);  // explore
    undoChoice(choice, state);     // wapas aao
  }
}
```

---

### Q20. Subsets / Power Set

**Problem:** `[1,2,3]` → `[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]`

---

```js
function subsets(nums) {
  const result = [[]]; // empty subset pehle

  for (const num of nums) {
    // Har existing subset mein num add karo — naaya subset banega
    const newSubsets = result.map(subset => [...subset, num]);
    result.push(...newSubsets);
  }
  return result;
}
// Time: O(2^n), Space: O(2^n)
```

---

## 7. Sorting & Searching

---

### ⭐ Q21. Binary Search

**Problem:** Sorted array `[1,3,5,7,9,11]`, target=7 → index `3`

---

```js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // overflow-safe: left + (right-left)/2

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;  // right half mein dhundho
    else right = mid - 1;                          // left half mein dhundho
  }
  return -1; // nahi mila
}
// Time: O(log n), Space: O(1)
```

**💡 Hinglish Trick:**
> Dictionary mein word dhundhte ho kaise? Beech se kholte ho! Agar word alphabetically pehle hai toh left half dekho, warna right. Binary search yahi karta hai!

---

### Q22. Merge Sort

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));   // left half sort karo
  const right = mergeSort(arr.slice(mid));      // right half sort karo

  return merge(left, right); // dono merge karo
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
// Time: O(n log n), Space: O(n)
```

**💡 Hinglish:** Divide and Conquer — toddo, sort karo, jodo! Jaise cards ko group mein sort karke merge karte hain.

---

### ⭐ Q23. Search in Rotated Sorted Array

**Problem:** `[4,5,6,7,0,1,2]`, target=0 → `4`

---

```js
function search(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // Left half sorted hai?
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      // Right half sorted hai
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
// Time: O(log n)
```

**💡 Hinglish Tip:** Rotation ke baad bhi ek half hamesha sorted hoga. Pehle sorted half identify karo, phir binary search!

---

## 8. Linked List

---

### ⭐ Q24. Reverse a Linked List

**Problem:** `1 → 2 → 3 → 4 → 5` → `5 → 4 → 3 → 2 → 1`

---

**🚀 Iterative (Best):**
```js
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next; // aage ka save karo
    current.next = prev;       // pointer palto
    prev = current;            // prev ek aage
    current = next;            // current ek aage
  }
  return prev; // naya head
}
// Time: O(n), Space: O(1)
```

**Recursive:**
```js
function reverseListRecursive(head) {
  if (!head || !head.next) return head;
  const newHead = reverseListRecursive(head.next);
  head.next.next = head; // aagla node current ko point kare
  head.next = null;      // current ka pointer null karo
  return newHead;
}
// Time: O(n), Space: O(n) call stack
```

**💡 Dry Run:**
```
Original: 1 → 2 → 3 → null
Step 1: prev=null, curr=1 → curr.next=null  | prev=1, curr=2
Step 2: prev=1,    curr=2 → curr.next=1    | prev=2, curr=3
Step 3: prev=2,    curr=3 → curr.next=2    | prev=3, curr=null
Return: 3 → 2 → 1 → null ✅
```

---

### ⭐ Q25. Detect Cycle in Linked List

**Problem:** Kya linked list mein loop hai?

---

**🚀 Optimal (Floyd's Tortoise and Hare):**
```js
function hasCycle(head) {
  let slow = head; // kachua — ek ek step
  let fast = head; // khargosh — do do step

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // cycle hai!
  }
  return false;
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Analogy:**
> Ek kachua aur khargosh circular track pe bhaag rahe hain. Khargosh tez hai — agar track circular hai, toh khargosh kachua ko pakad lega! Agar nahi pakda, toh track straight hai.

---

### Q26. Merge Two Sorted Linked Lists

**Problem:** `1→2→4` + `1→3→4` → `1→1→2→3→4→4`

---

```js
function mergeTwoLists(l1, l2) {
  const dummy = { next: null }; // dummy node — trick!
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2; // bachi hui list attach karo
  return dummy.next;
}
// Time: O(n+m), Space: O(1)
```

**💡 Hinglish Trick:** **Dummy node** trick — edge cases (empty list) handle karna aasaan ho jaata hai. Dummy ke baad se result shuru hota hai.

---

## 9. Stack & Queue

---

### ⭐ Q27. Valid Parentheses

**Problem:** `"()[]{}"` → `true`, `"(]"` → `false`

---

```js
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if ('({['.includes(char)) {
      stack.push(char); // opening bracket — stack mein daalo
    } else {
      // Closing bracket — top match karna chahiye
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0; // stack empty hona chahiye end mein
}
// Time: O(n), Space: O(n)
```

**💡 Hinglish:** Opening brackets ko stack mein daalo. Closing bracket aane pe check karo ki stack ka top usse match karta hai ya nahi!

---

### Q28. Daily Temperatures (Next Greater Element)

**Problem:** `[73,74,75,71,69,72,76,73]` → `[1,1,4,2,1,1,0,0]`

---

```js
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = []; // indexes store karega (monotonic stack)

  for (let i = 0; i < temps.length; i++) {
    // Jab current temp stack ke top se bada ho
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx; // kitne din wait karna pada
    }
    stack.push(i);
  }
  return result;
}
// Time: O(n), Space: O(n)
```

**💡 Hinglish Trick:** **Monotonic Stack** — stack mein hamesha decreasing order maintain karo. Jab bada element aaye, chote elements ka answer milta hai!

---

## 10. Trees

---

### ⭐ Q29. Inorder, Preorder, Postorder Traversal

---

```js
// Inorder: Left → Root → Right (sorted order deta hai BST mein)
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
  return result;
}

// Preorder: Root → Left → Right (tree copy karne mein useful)
function preorder(root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorder(root.left, result);
  preorder(root.right, result);
  return result;
}

// Postorder: Left → Right → Root (tree delete karne mein useful)
function postorder(root, result = []) {
  if (!root) return result;
  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.val);
  return result;
}
```

**💡 Hinglish Trick:** Yaad karne ka tarika:
- **In**order = **IN**side (root beech mein)
- **Pre**order = **PRE**me se (root pehle)
- **Post**order = **POST** mein (root baad mein)

---

### ⭐ Q30. Maximum Depth of Binary Tree

**Problem:** Tree ki height kitni hai?

---

```js
function maxDepth(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1; // +1 current node ke liye
}
// Time: O(n), Space: O(h) — h = height
```

---

### ⭐ Q31. Level Order Traversal (BFS)

**Problem:** Har level ke nodes ek saath print karo

---

```js
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root]; // BFS ke liye queue use karo

  while (queue.length) {
    const levelSize = queue.length; // is level mein kitne nodes?
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
// Time: O(n), Space: O(n)
```

**💡 Hinglish:** BFS = Queue. DFS = Stack/Recursion. Level-wise kaam karna ho → BFS!

---

### Q32. Validate Binary Search Tree

```js
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  // Current node ki value range ke andar honi chahiye
  if (root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) &&  // left mein max = current
         isValidBST(root.right, root.val, max);    // right mein min = current
}
// Time: O(n), Space: O(h)
```

---

## 11. Dynamic Programming

---

### ⭐ Q33. Climbing Stairs

**Problem:** N stairs hain, ek baar mein 1 ya 2 steps le sakte ho. Kitne tarike?

---

```js
function climbStairs(n) {
  if (n <= 2) return n;

  let prev = 1, curr = 2;

  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr]; // Fibonacci pattern!
  }
  return curr;
}
// Time: O(n), Space: O(1)
```

**💡 Hinglish Insight:** Nth stair tak pahunchne ke tarike = (N-1)th se + (N-2)th se. Yahi Fibonacci hai!

---

### ⭐ Q34. 0/1 Knapsack

**Problem:** Items hain weight aur value ke saath. Bag capacity W hai. Maximum value nikalo.

---

```js
function knapsack(weights, values, W) {
  const n = weights.length;
  // dp[i][w] = pehle i items aur capacity w ke saath max value
  const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      // Item nahi liya
      dp[i][w] = dp[i - 1][w];

      // Item utha sakte hain (agar weight fit hoti hai)
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      }
    }
  }
  return dp[n][W];
}
// Time: O(n*W), Space: O(n*W)
```

**💡 Hinglish DP Mantra:**
> **DP = Chhote problems ke answers yaad rakho, bade mein use karo.**
> Knapsack mein: "Kya main ye item lunga ya nahi?" — dono cases check karo, better choose karo.

---

### ⭐ Q35. Longest Common Subsequence (LCS)

**Problem:** `"abcde"` aur `"ace"` → `3` ("ace")

---

```js
function lcs(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // dono match — extend karo
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // best of dono
      }
    }
  }
  return dp[m][n];
}
// Time: O(m*n), Space: O(m*n)
```

---

### Q36. Coin Change (Minimum Coins)

**Problem:** `coins=[1,2,5]`, `amount=11` → `3` (5+5+1)

---

```js
function coinChange(coins, amount) {
  // dp[i] = i amount banane ke liye minimum coins
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 amount ke liye 0 coins

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// Time: O(amount * coins), Space: O(amount)
```

**💡 Hinglish:** Bottom-up approach — `dp[0]=0` se shuru karo. Har amount ke liye har coin try karo. Minimum wala rakho!

---

## 12. Interview Tips & Tricks

---

### 🧠 Problem Solve Karne ka Framework (PEDAC)

```
P — Problem Understand karo
  → "Kya main ye correctly samjha? Example le ke confirm karta hoon"

E — Examples socho (Edge cases bhi!)
  → Empty array? Negative numbers? Single element?

D — Data Structure choose karo
  → Array/String → Two Pointer, Sliding Window
  → Har element dhundhna → HashMap
  → Level-wise → Queue/BFS
  → Nested/Tree → Recursion/Stack/DFS
  → Optimization → DP

A — Algorithm socho (Brute force pehle, phir optimize)
  → "Brute force O(n²) hoga. Kya O(n) possible hai?"

C — Code likho
```

---

### 🗺️ Pattern Recognition Cheatsheet

| Pattern | Use kab karein | Example |
|---------|---------------|---------|
| **Two Pointer** | Sorted array, pair/triplet find karna | Two Sum (sorted), 3Sum |
| **Sliding Window** | Subarray/substring ka optimization | Longest Substring, Max Sum K |
| **HashMap/Set** | O(1) lookup, frequency count | Anagram, Duplicate |
| **BFS (Queue)** | Shortest path, level-wise | Level Order, Word Ladder |
| **DFS/Recursion** | Tree problems, backtracking | Permutations, Subsets |
| **Binary Search** | Sorted array, search space | Rotated Array |
| **Monotonic Stack** | Next greater/smaller element | Daily Temperatures |
| **DP** | Maximize/minimize, count ways | Knapsack, LCS, Coins |
| **Greedy** | Local optimal = global optimal | Stock Profit, Activity Selection |
| **Divide & Conquer** | Merge sort pattern | Merge Sort, Quick Sort |

---

### ⚡ Time Complexity Quick Reference

| Complexity | Name | Example |
|-----------|------|---------|
| O(1) | Constant | HashMap lookup |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Single loop |
| O(n log n) | Linearithmic | Merge Sort |
| O(n²) | Quadratic | Nested loop |
| O(2^n) | Exponential | Subsets |
| O(n!) | Factorial | Permutations |

---

### 💬 Interview Mein Kya Bolo

**Shuruat mein:**
> *"Mujhe problem ek baar padhne do... Okay, mera pehla approach hai brute force jisme O(n²) time lagega. Kya main pehle woh bataaun ya seedha optimal?"*

**Sochte waqt:**
> *"Main ek hashmap use karta hoon taaki O(1) mein lookup ho sake..."*

**Edge cases:**
> *"Kya empty array aa sakti hai? Kya negative numbers possible hain?"*

**Code ke baad:**
> *"Time complexity O(n) hai kyunki ek hi loop hai. Space O(n) hai hashmap ke liye."*

---

### ❌ Common Galtiyan Jo Fresher Karte Hain

1. **Off-by-one error** — `i < n` vs `i <= n` — dhyan se!
2. **Integer overflow** — `mid = (left+right)/2` — use `left + (right-left)/2`
3. **Null/undefined check nahi kiya** — linked list mein `node?.next`
4. **Modifying array while iterating** — kabhi mat karo!
5. **Edge case bhool gaye** — empty input, single element, all same
6. **Variable shadowing** — outer aur inner same naam
7. **Index out of bounds** — array access karte waqt

---

### 📅 30-Day DSA Crash Plan

```
Week 1 (Days 1-7):   Arrays + Strings + HashMap
Week 2 (Days 8-14):  Two Pointer + Sliding Window + Sorting
Week 3 (Days 15-21): Recursion + Linked List + Stack/Queue
Week 4 (Days 22-28): Trees + Binary Search + Basic DP
Days 29-30:          Mock Interviews + Revision
```

### 🎯 Must-Do Questions Before Interview (Fresher)
- [ ] Two Sum
- [ ] Valid Parentheses
- [ ] Reverse Linked List
- [ ] Climbing Stairs
- [ ] Binary Search
- [ ] Maximum Subarray (Kadane's)
- [ ] Best Time to Buy Stock
- [ ] Valid Palindrome
- [ ] Merge Two Sorted Lists
- [ ] Maximum Depth of Binary Tree

### 🚀 Must-Do Questions (Mid Level)
- [ ] 3Sum
- [ ] Longest Substring Without Repeating Chars
- [ ] LRU Cache
- [ ] Word Search (Backtracking)
- [ ] Course Schedule (Graph/Topological Sort)
- [ ] Coin Change (DP)
- [ ] Merge Intervals
- [ ] Serialize/Deserialize Binary Tree
- [ ] Find Median from Data Stream
- [ ] Trapping Rain Water

---

> 💡 **Final Gyaan:** DSA mein pattern recognition sabse important hai. Ek baar patterns samajh gaye, toh naye questions bhi khud solve ho jaate hain. Roz ek question zaroor karo — consistency > intensity!

---

*Hinglish mein banaya gaya — Interview ki taiyari ke liye ❤️ | 2026*
