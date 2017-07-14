'use strict';

function NullReferenceExcption(message) {
  console.log(message);
  return message;
};

function quickSort(origArray) {

if(origArray == null){
    throw new NullReferenceExcption("Null values is not supported in Quick Sort");
}

  if (origArray.length <= 1) {
    return origArray;
  } else {
    const left = [];
    const right = [];
    const newArray = [];
    const pivot = origArray.pop();
    const length = origArray.length;

    for (let i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
};
module.exports = quickSort;