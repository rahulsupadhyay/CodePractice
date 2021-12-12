// Less swapping than bubble sort

const swap = (i, j, arr) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValIndex] > arr[j]) {
        minValIndex = j;
      }
    }
    if (i !== minValIndex) swap(i, minValIndex, arr);
    console.log(`Pass ${i}:`, arr);
  }
  return arr;
};

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17])); // O(n^2)
