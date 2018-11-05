var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArr = array;
  newArr.unshift(element);
  return newArr;
}

function destructiveelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArr = array;
  newArr.push(element);
  return newArr;
}

function destructiveelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, idx) {
  return array[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.unshift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array;
  newArr.shift(element);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArr = array;
  newArr.pop(element);
  return newArr;
}
