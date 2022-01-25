function reverse(str) {
  //declare fucntion and what variable to take in
  var words = [];
  //declare empty var word
  words = str.match(/\S+/g);
  //splitting the string
  var result = "";
  //declare empty var result
  for (var i = 0; i < words.length; i++) {
// for loop initialise i = 0 and goes up to the length of word
     result += words[i].split('').reverse().join('') + " ";
    // print only the words in reverse order, keep the space and order the same
  }
  return result
  //return the rsult above
}
console.log(reverse("reverse the words not the order"))
//print the called function reverse() and what's inside the bracket
