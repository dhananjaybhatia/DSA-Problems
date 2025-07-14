function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s = s.toLowerCase().split("").sort().join("");
  t = t.toLowerCase().split("").sort().join("");

  if (s === t) {
    return true;
  }
  return false;
}

console.log(isAnagram("racecpr", "carrace")); // -- false
console.log(isAnagram("racecar", "carrace")); //-- true


