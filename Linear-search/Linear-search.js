const numbers = [4, 12, 43, 23, 15, 66, 55, 34, 83, 22];

function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
