function uniteUnique(...arr) {
  const flat = arr.flat();
  const uniqueValues = [...new Set(flat)];
  console.log(uniqueValues);
  return arr;
}

console.log("------------------");
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
console.log("------------------");
uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5].
console.log("------------------");
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8].
console.log("------------------");
uniteUnique([1, 3, 2], [5, 4], [5, 6]); //should return [1, 3, 2, 5, 4, 6].
console.log("------------------");
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
