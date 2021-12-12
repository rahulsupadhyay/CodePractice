//Char count in a string
const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (char.match(/[a-z0-9]/)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};
console.log(charCount('Hello there 123!'));
