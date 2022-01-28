//Medium 3
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder
// MEDIUM 3
// this function takes in two parameters
function gcd(num1, num2) {
    //this part starts the while loop which takes in the paramater of "num2"
    while(num2) {
        //x is a variable created to hold the value of num2
        x = num2;
        //num2 is then told to hold the value of said equation num1 % num2(in the case that num1 is less then num2 the function will multiply num2 by 0 and add num1, that vallue will still be stored in the num2 variable)
        num2 = num1 % num2;
    //   num1 then takes the place of num2 in the x variable
        num1 = x;
    //   console.log(num1);//126 78 48 30 18 12 6
    }
    return x;
}
console.log(gcd(78, 126));
console.log(gcd(360, 243));