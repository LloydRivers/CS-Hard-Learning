export const swap = (arr: number[], indexOne: number, indexTwo: number) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};
