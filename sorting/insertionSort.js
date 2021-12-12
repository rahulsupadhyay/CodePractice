// This sort helps in cases where live data streaming is happening, i.e. values are coming in for the array and this algo is able to manage as
// it tries to find the right spot

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4])); //O(n^2)

// [2, 1, 9, 76, 4]
// currentVal = 1
// [2, 1, 9, 76, 4] -> j >= 0 && arr[j] > currentVal, j = 0
// [2, 2, 9, 76, 4] -> arr[j + 1] = arr[j];
// [1, 2, 9, 76, 4] -> arr[j + 1] = currentVal; j = -1
// currentVal = 9
// [1, 2, 9, 76, 4] -> j >= 0 && arr[j] > currentVal, j = 1
// [1, 2, 9, 76, 4] -> arr[j + 1] = arr[j];
// currentVal = 76
// [1, 2, 9, 76, 4] -> j >= 0 && arr[j] > currentVal, j = 2
// [1, 2, 9, 76, 4] -> arr[j + 1] = arr[j];
// currentVal = 4
// [1, 2, 9, 76, 4] -> j >= 0 && arr[j] > currentVal, j = 3
// [2, 2, 9, 76, 76] -> arr[j + 1] = arr[j];
// [1, 2, 9, 76, 76] -> j >= 0 && arr[j] > currentVal, j = 2
// [2, 2, 9, 9, 76] -> arr[j + 1] = arr[j];
// [1, 2, 9, 9, 76] -> j >= 0 && arr[j] > currentVal, j = 1
// [1, 2, 4, 76, 4] -> arr[j + 1] = currentVal;
