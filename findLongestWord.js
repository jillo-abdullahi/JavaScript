function findLongestWord(str) {
  var arr = str.split(" ");
  arr.sort(function(a,b){
    return b.length-a.length;
  });
  
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");