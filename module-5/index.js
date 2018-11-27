function forEach(array, hander, context) {
  for (let i = 0; i < array.length; i++) {
    hander.call(context, array[i], i, array);
  }
}
function map(array, handler, context) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(handler.call(context, array[i], i, array));
  }

  return newArr;
}
function filter(array, handler, context) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (handler.call(context, array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
function find(array, handler, context) {
  for (let i = 0; i < array.length; i++) {
    if (handler.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}
function reduce(array, handler, initialVal) {
  let accumulator = initialVal === undefined ? undefined : initialVal;

  for (let i = 0; i < array.length; i++) {
    if (accumulator !== undefined) {
      accumulator = handler.call(undefined, accumulator, array[i], i, array);
    } else {
      accumulator = array[i];
    }
  }

  return accumulator;
}
function some(array, handler, context) {
  for (let i = 0; i < array.length; i++) {
    if (handler.call(context, array[i], i, array)) {
      return true
    }
  }
  return false
}
function every(array, handler, context) {
  for (let i = 0; i < array.length; i++) {
    if (!handler.call(context, array[i], i, array)) {
      return false
    }
  }
  return true
}
