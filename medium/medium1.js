const vowelChecker = (letter) => {
    // is vowels array the forLoop will check against to see if the argument passed is a value.
    const vowels = ["a", "e", "i", "o", "u", "y"];
    //the forLoop will take in the argument passed and iterate through the vowelsnarray checking if the passed argument matches any of the vowels array indeletter values
    for (i = 0; i < vowels.length; i++){
        // if the argument matches any of the vowels array indeletter it will consoleLog car...
        if (letter === vowels[i]){
            console.log(`${letter} is a vowel`);
            return true;
           

        } else if (letter != vowels[i]) {
            console.log(`${letter} is not a vowel`);
            return false;
            break;
        }
        }
};
console.log(vowelChecker("y"));