// Works on sorted arrays only
// Divide and conquer

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    num < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
};

console.log('result: ', binarySearch([1, 2, 3, 4, 5], 5));
