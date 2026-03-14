function isPalindrome(s) {
let left = 0;
    let right = s.length - 1;
    const isAlphaNum = /[a-z0-9]/i;

    while (left < right) {

        if (!isAlphaNum.test(s[left])) {
            left++;
            continue;
        }

        if (!isAlphaNum.test(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("aaaaa"));

