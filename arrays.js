var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  var newArr = arr.unshift(ele);
  return newArr;
}

function destructiveelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  var newArr = arr.push(ele);
  return newArr;
}

function destructiveelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray(arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.unshift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.unshift();
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.pop();
  return newArr;
}
