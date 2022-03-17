export function formatNumbers(array: number[]) {
  const formattedArray: string[] = [];
  for (const number of array) {    
    const formattedNumber = `${number}`.padStart(2, "0");
    formattedArray.push(formattedNumber);
  }
  return formattedArray;
}