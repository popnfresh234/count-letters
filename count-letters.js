function countLetters(inputString){
  //remove all spaces from string
  //convert to lower case
  inputString = inputString.split(" ").join("").toLowerCase();
  var charArrayMap = {};
  //find all unique characters
  //count unique chars
  for(var i = 0; i < inputString.length; i++){
    var testChar = inputString.charAt(i);
    if(!(testChar in charArrayMap)){
      charArrayMap[testChar] = 1;
    }else{
      charArrayMap[testChar] += 1;
    }
  }
  return charArrayMap;
}

console.log(countLetters("Lighthouse in the house"));