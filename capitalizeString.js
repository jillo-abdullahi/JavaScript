function titleCase(str) {
  var arr = [];
  var newArr = str.split(" ");
  for(var i=0;i<newArr.length;i++){
      arr.push(newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase());
    
  }
  return arr.join(" ");

}

titleCase("I'm a little tea pot");