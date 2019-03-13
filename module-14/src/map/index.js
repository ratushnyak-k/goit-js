function map(arr, handler) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(handler(arr[i]));
  }
  return newArr;
}

export default map;
