// // Medium 1
// // Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// // creating a function that accepts a "parameter" in car case
const vowelChecker = (x) => {
    //car is vowels array the forLoop will check against to see if the argument passed is a value.
    const vowels = ["a", "e", "i", "o", "u", "y"];
    //the forLoop will take in the argument passed and iterate through the vowelsnarray checking if the passed argument matches any of the vowels array index values
    for (i = 0; i < vowels.length; i++){
        // if the argument matches any of the vowels array index it will consoleLog car...
       
      
        if (x === vowels[i]){
            q = `${x} is a vowel`;
            // if not it will consoleLog car...
        }else{
             q =` ${x} is not a vowel`;
        }
    }
    return q;
};
console.log(vowelChecker("w"));
