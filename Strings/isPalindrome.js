// Palindrome number or a string.
// when when read backwards and forwards its the same.
// it its a number then best approach is to convert it into a string because we have inbuilt function to reverse a string.

//Brut Force
// function isPalindrome(num) {
//   if (num < 0) return false;
//   const numString = num.toString();
//   const numStringReverse = numString.split("").reverse().join("");
//   if (Number(numString) === Number(numStringReverse)) {
//     return true;
//   } else return false;
// }

// num = 12210;
// console.log(isPalindrome(num));

//OR

// function isPalindrome(num) {
//   return num < 0
//     ? false
//     : num === parseInt(num.toString().split("").reverse().join(""));
// }

// num = 1221;
// console.log(isPalindrome(num));

//OR

// function isPalindrome(s) {
//   const original = s.toLowerCase().split(" ").join("");
//   const reverse = original.split("").reverse().join("");
//   if (original === reverse) {
//     return true;
//   } else false;
// }
// s = "Was it a car or a cat I saw";
// console.log(isPalindrome(s));

//OR

//
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
s = "Was it a car or a cat I saw?";
console.log(isPalindrome(s));
