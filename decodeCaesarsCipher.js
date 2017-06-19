function rot13(str) { // LBH QVQ VG!
  var newArr=[];
  var arr = str.split("");
  for(var i=0;i<arr.length;i++){
    if(arr[i].charCodeAt() <=90 && arr[i].charCodeAt()>=65){
    var code = arr[i].charCodeAt();
    if((code+12)<=89){
      code+=13;
    }else if((code+13)>89){
      code=((code+12)-90)+65;
    }
    
    newArr.push(String.fromCharCode(code));
    }else{
      newArr.push(arr[i]);
    }
  }
  
  return newArr.join("");
  
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");