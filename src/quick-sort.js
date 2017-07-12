'use strict';

function quickSort(input) {
    if(input == null || input == undefined){
    throw new DOMException();
    
    }
else if(input.length === 0){
  return new Array(0);
} 
else{
     if(isNaN(parseInt(input[0]))){
     return input.sort();
    }
     else if(!isNaN(parseInt(input[0]))){
     return input.sort( (a,b) => parseInt(a) - parseInt(b));
    }
}
};
module.exports = quickSort;