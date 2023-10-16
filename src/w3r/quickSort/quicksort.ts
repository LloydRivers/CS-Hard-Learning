import { partition } from "./partition";
export const quicksort = (
  array: number[],
  leftBound = 0,
  rightBound = array.length - 1
) => {
  if (array.length > 1) {
    if (rightBound > leftBound) {
      const pivotIndex = partition(array, leftBound, rightBound);
      quicksort(array, leftBound, pivotIndex - 1);
      quicksort(array, pivotIndex, rightBound);
    }
  }
  return array;
};
