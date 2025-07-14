function groupAnagramsHash(strs) {
  const hashMap = new Map();

  for (let s of strs) {
    let sorted = s.split("").sort().join("");
    console.log(sorted);

    if (!hashMap.has(sorted)) {
      hashMap.set(sorted, []);
    }
    hashMap.get(sorted).push(s);
  }
  return Array.from(hashMap.values());
}

strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagramsHash(strs));
