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