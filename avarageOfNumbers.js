//Calculate average of a list of numbers

function find_average(array) {
  var sum = 0;
  for(var i = 0; i<array.length; i++){
    sum+=array[i];
  }
  var average = sum/array.length;
  return average;
}