//This pattern uses object or sets to collect values/frequencies of values

// Examples
//[1,2,3] [9,4,1] -> true
//[1,2,3] [1,9] -> false
//[1,2,1][4,4,1] -> false

const same = (arr1, arr2) => {
  let freqCounter1 = {};
  let freqCounter2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num of arr1) {
    freqCounter1[num] = ++freqCounter1[num] || 1;
  }
  console.log({ freqCounter1 });

  for (let square of arr2) {
    freqCounter2[square] = ++freqCounter2[square] || 1;
  }
  console.log({ freqCounter2 });

  for (let key in freqCounter1) {
    if (!(key ** 2) in freqCounter2) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
};
console.log(same([1, 2, 3, 3], [4, 9, 4, 1]));
