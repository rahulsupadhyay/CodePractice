// Keep the largest number at the end

// Regular solution O(n^2)
// const bubbleSort = (arr) => {
//   const swap = (arr, a, b) => {
//     [arr[a], arr[b]] = [arr[b], arr[a]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([10, 20, 5, 15, 30]));

// Almost sorted array solution O(n)
const bubbleSort = (arr) => {
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };

  let noSwaps; //Skip the passes if array was almost sorted already
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([30, 5, 10, 15, 20]));
