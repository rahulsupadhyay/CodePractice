// [1,1,1,1,1,2] - 2
// [1,2,3,4,4,4,7,7,12,12,13] - 7
// [] = 0
// [-2,-1,-1,0,1] - 4

// const countUniqueVals = (arr) => {
//   let count = 1;

//   if (arr.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;
//     if (arr[i] < arr[j]) {
//       count++;
//       i = j - 1;
//     } else {
//       j++;
//     }
//   }
//   return count;
// };

// OR modify existing array and relace i with j's value

const countUniqueVals = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueVals([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
