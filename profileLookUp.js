function lookUp(firstName, prop) {
  // Only change code below this line
  var answer = "No such contact";
  contacts.some(function(arg) {
    if (arg.firstName === firstName && arg.hasOwnProperty(prop) === true) {
      answer = arg[prop];
    } else if (arg.hasOwnProperty(prop) === false) {
      answer = "No such property";
    }
  });
  return answer;
  // Only change code above this line
}

// Change these values to test your function
lookUp("Kristian", "lastName");