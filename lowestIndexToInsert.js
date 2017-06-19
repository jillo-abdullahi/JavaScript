
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr.push(num);
  var newArr = arr.sort(function(a,b){
    return a-b;
  });
 
  return newArr.indexOf(num);
}

getIndexToIns([3, 10, 5], 3);