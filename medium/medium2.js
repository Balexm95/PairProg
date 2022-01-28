// //MEDIUM 2
// // Create a function that accepts two strings, then determines 
//whether or not the first string is an anagram of the second string 
//by returning a boolean.

// //this code removes all the punctuation marks from a string
const takeAway = (string) => {
 //Creating array of punctuation marks
  const punc = [".", "'", "!", ":", ";", " ", ",", "@"];
// value of x is   
//  Loop length times of punctuation array we created
  for(i = 0; i< punc.length; i++){
   string =  string.replaceAll(punc[i], "")//Replace al punctuation with nothing inside string


      }
      //Finaly return the string
      return string;
  }
 
const anagramChecker = (a,b) => {
  //setting a to lowercase the splitting it then sorting and joining again
  firstParam = a.toLowerCase().split("").sort().join(""); // im a dot in place
  secondParam = b.toLowerCase().split("").sort().join(""); // a decimal point  
  // Removing punctuation from a and b using above function i just explained
  puncRmv1 = takeAway(firstParam);               
  puncRmv2 = takeAway(secondParam);
  //Checking whether both are same
  let result = puncRmv1 === puncRmv2

  //Returning the result
  return result;
}
console.log(anagramChecker("a decimal point", "I'm a dot in place."));

                    
         