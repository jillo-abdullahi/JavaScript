function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var testString = str.substr(str.length-target.length,target.length);
  return testString === target;
}

confirmEnding("Bastian", "n");