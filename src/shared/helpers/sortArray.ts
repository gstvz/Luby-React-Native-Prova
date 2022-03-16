export function sortArray(selectedNumbers: number[]) {
  return selectedNumbers
  .map((number) => {
    return number;
  })
  .sort((a, b) => {
    return a - b;
  })
}