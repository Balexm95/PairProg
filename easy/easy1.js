let array = Array(10) // generates a random array of up to 10 index
                .fill() // fills each index of said array
                .map(() =>  Math.floor(Math.random() * 50)+ 1); // arrays from 0-50 (exclusive)
//create the function that will take in a paramater for arrays variable
const gutCheck = (x) => {
    //create two variables that are arrays
    const odd = [];
    const even = [];
    //create a forLoop to loop through whatever array is passed
    for (let i = 0; i < x.length; i++){
        //checks if the number in the arrays index is an even number, if not it will be passed as odd.
        x[i] % 2 === 0 ? even.push(x[i]) : odd.push(x[i]);
    }
    //create an object that will hold the two new arrays we created
    const returnArrays = {
        odd,
        even,
    };
    //the function will return the ${returnArrays} object holding the new arrays of even and odd numbers.
    return returnArrays;
};
console.log(gutCheck(array));