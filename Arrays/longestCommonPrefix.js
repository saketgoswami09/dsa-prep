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