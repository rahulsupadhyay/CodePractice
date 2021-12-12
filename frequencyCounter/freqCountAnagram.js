// Anagram

// '', '' = true
// 'aaz' 'zza' = false
// 'anagram' 'nagaram' = true
// 'cat' 'rat' = false

const validAnagram = (str1, str2) => {
  let freqCounter1 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let char1 of str1) {
    freqCounter1[char1] = ++freqCounter1[char1] || 1;
  }

  for (let char2 of str2) {
    if (!freqCounter1[char2]) {
      return false;
    } else {
      freqCounter1[char2] -= 1;
    }
  }

  return true;
};

//OR old way with 3 loops
// const validAnagram = (str1, str2) => {
//   let freqCounter1 = {};
//   let freqCounter2 = {};
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let char1 of str1) {
//     freqCounter1[char1] = ++freqCounter1[char1] || 1;
//   }
//   console.log({ freqCounter1 });
//   for (let char2 of str2) {
//     freqCounter2[char2] = ++freqCounter2[char2] || 1;
//   }
//   console.log({ freqCounter2 });

//   for (let key in freqCounter1) {
//     if (!key in freqCounter2) {
//       return false;
//     }
//     if (freqCounter2[key] !== freqCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
// };

console.log(validAnagram('anagram', 'nagaram'));
