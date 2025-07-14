function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) {
    const sortedS = s.split("").sort().join("");

    if (!res[sortedS]) {
      res[sortedS] = [];
    }
    res[sortedS].push(s);
  }
  return Object.values(res);
}
strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strs));
