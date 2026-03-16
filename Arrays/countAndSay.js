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