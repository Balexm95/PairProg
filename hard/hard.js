//Function to check if brackets are balanced

function brackets(string) {
  //conditions if specific brackets are the same from beginning to end  return true
    if(string[0] === "{" && string[string.length - 1] === "}"){
        return true;
    }else if(string[0] === "[" && string[string.length - 1] === "]"){
        return true;
    }else if(string[0] === "(" && string[string.length - 1] === ")"){
        return true;
    }else{
       return false;
    }
}

var string1 = "{hello world}"; 
var string2 = "{hello world]";

console.log(brackets(string1));
console.log(brackets(string2));

