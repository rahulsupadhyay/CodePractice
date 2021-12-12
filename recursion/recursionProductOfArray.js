// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (numArr) => {
  if (numArr.length === 0) return 1;
  return numArr[0] * productOfArray(numArr.slice(1));
};

console.log(productOfArray([1, 2, 3]));
