function palindrome(str) {
  var regex = /[\W_]/g;
  var newStr = str.toLowerCase().replace(regex,"");
  var reversedStr = newStr.split("").reverse().join("");
  if(newStr==reversedStr){
    return true;
  }else{
    return false;
  }
  
}

palindrome("eye");