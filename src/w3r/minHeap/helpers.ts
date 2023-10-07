const getParent = (current: number) => Math.floor(current / 2);
const getLeft = (current: number) => current * 2;
const getRight = (current: number) => current * 2 + 1;

export { getParent, getLeft, getRight };
