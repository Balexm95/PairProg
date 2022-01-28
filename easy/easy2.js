//EASY2
//set values for array
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//empty array that will contain prime values
var primeArray = []

function isPrime(number = []){
    //initialize at i = 0
    //iterate until index is equal or greater than length of aray
    for (var i = 0; i < number.length; i++) {
// if the number in the aray equals 2 and exclusively does not equal 1
//includes 2 in array
     //if the element is equals to 2 then it's a prime and we add it into primeArray 
     //and also print number is prime along with the number
        if (number[i] === 2 && number[i]!= 1) {
         
          primeArray.push(number[i])
          console.log("This is a prime number");
          console.log(number[i]);
        } 
        ////if on dividing number with 2, we get a remainder which is not 0 
        //and the number is also not 0 then the given number is prime
        else if (number[i] % 2 != 0 && number[i]!= 1){
         //push the number that meets the condition to primeArray
              primeArray.push(number[i])
              console.log("This is a prime number");
              console.log(number[i]);
          }
          //otherwise number is not prime
          else{
            console.log("This is not a prime number")
            console.log(number[i]);
          }
        }

      }
//calling function isPrime on numArray
isPrime(numArray)
console.log("\n")
//printing Prime Array on screen
console.log("Prime Array")
console.log(primeArray)