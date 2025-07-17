// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   s = s.toLowerCase().split("").sort().join("");
//   t = t.toLowerCase().split("").sort().join("");

//   if (s === t) {
//     return true;
//   }
//   return false;
// }

console.log(isAnagram("racecpr", "carrace")); // -- false
console.log(isAnagram("racecar", "carrace")); //-- true

//using Object
function isAnagram(s, t) {
  if (s.length != t.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
// if any doubt:
// function testAnagramLog(s) {
//   let obj1 = {};

//   for (let i = 0; i < s.length; i++) {
//     obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//   }

//   console.log("Built frequency map:", obj1);

//   for (const key in obj1) {
//     console.log("key →", key); // the character itself (e.g., "c")
//     console.log("obj1[key] →", obj1[key]); // how many times it appeared
//   }
// }

// testAnagramLog("caat");
