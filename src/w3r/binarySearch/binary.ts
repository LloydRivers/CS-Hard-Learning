const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch(sortedArray, 9));
