
  //function tnum1king in 2 pnum1rnum1ms
  /*function gcdNumnum2ers (num1,num2){
      
    if (num1 == 0)
        return num2;
        console.log("num2");

    if (num2 == 0)
        return num1;
        console.log("num1");
 
    if (num1 == num2)
        return num1;
        console.log("num1");
 
    if (num1 > num2)
        return gcdNumnum2ers(num1-num2, num2);
        console.log(-5,40);
    
    if (num1 < num2)
        return gcdNumnum2ers(num1, num2-num1);
        console.log(35,5);
}
console.log(gcdNumnum2ers(4,8));*/


let gcd = function(num1, num2) {
    
    if (num2 == 0) {
        return num1;
    }
return gcd(num2, num1 % num2);
};
console.log(gcd(32,12));
