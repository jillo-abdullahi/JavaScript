
function sumAll(arr) {
  
  var countArr = [];
  var min = arr.reduce(function(a,b){ return Math.min(a,b);});
  var max = arr.reduce(function(a,b){ return Math.max(a,b);});
  for(var i=min; i<=max; i++){
    countArr.push(i);
  }
  
  return countArr.reduce(function(a,b){return a+b;});
}

sumAll([1, 4]);