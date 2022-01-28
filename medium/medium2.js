// JavaScript program to check whether two strings are anagrams of each other

function isAnagram(string1,string2)
{

// lengths of both strings
 let length1 = string1.length;
 let length2 = string2.length;

 if (length1 === length2) {
    return true;
    
   
 
 }}

 // Sort both strings
 string1.toLowerCase.split.sort();
 string2.toLowerCase.split.sort()

  // Compare sorted strings
  for (let i = 0; i < length1; i++){
    if (string1[i] === string2[i])
    return true;
  }
  

let string1=["Avenger's"];
let string2=["Spiderman"];

 if (isAnagram(string1, string2))
 console.log("The two strings are"
                    + " anagrams of each other");
else
 console.log("The two strings are not"
                    + " anagrams of each other");

                    
                    
                   /* 
                    
                    function anagrams (x,y){
                        var stringX = x.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
                        var stringY = y.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
                    
                    
                    if( stringX === stringY){
                        console.log(true)
                    }
                    else{
                        console.log(false)
                    }
                    }

                    let text = "So dark the con of man";
                    let text2 = "Madonna of the Rocks";
                    
                    console.log(anagrams(text,text2));  */            