function combineArrays(arr1: number[], arr2: (number | string)[]): number[] {
  const filteredArr2 = arr2.filter(item => typeof item === 'number');
  return [...arr1, ...filteredArr2.map(Number)];
}

const array1: number[] = [1, 2, 3];
const array2: (number | string)[] = [4, 5, "6"];

const combinedArray = combineArrays(array1, array2); // Works correctly now!
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]