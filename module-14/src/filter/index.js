function filter(array, handler, context = null) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    handler.call(context, array[i], i, array) && newArray.push(array[i]);
  }
  return newArray;
}

export default filter;
