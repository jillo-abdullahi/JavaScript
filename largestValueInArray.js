function largestOfFour(arr) {
  // You can do this!
  
  var largeArr = [];
  for(var i=0;i<arr.length;i++){
    arr[i].sort(function(a,b){
      return b-a;
    });
  }
  for(var j=0;j<arr.length;j++){
    largeArr.push(arr[j][0]);
  }
  return largeArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);