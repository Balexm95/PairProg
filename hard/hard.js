//Hard
// // Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False
// created a function that takes in a string
function brackets(str){
    //this is called a regular expression (/[^{}()[|]]+/g, "")
    // all this does is remove all the characters and 
    //returns whatever brackets was used in the string. 
    //The only thing that could break this function is using an extra bracket somewhere in the string. 
    //Therefore they can put the brakets anywhere except just the first and last charecter.
    str = str.replace(/[^{}()[\]]+/g, "");
    // console.log(str)
    // if the returned string matches one of these conditions it will return "true" if not "false"
    if(str === "{}" || str === "[]" || str === "()"){
        return true;
    }
    else{
        return false;
    }
}
str = "{H!el.lo !.world}";
console.log(brackets(str));