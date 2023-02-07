// Problem-1

function mindGame(num){
    if (typeof num !== 'number' ){
        return "please enter a valid number"
    } 
    else{
        const number = (num * 3 + 10) / 2;
        const total = number - 5;
        return total;
    }
}

/* I do for this problem. First of all Multiply the input number by 3, add 10 to the result, subtract 2 from the result, subtract 5 from the result, and return the final result of this operation. */





// Problem-2

function evenOdd(str){
   const length = str.length;

   if(typeof str != 'string'){
        return "please enter a valid input"  
   }
   else if(length % 2 === 0){
    return 'even';
   }
   else if(length % 2 != 0){
    return 'odd';
   }  

}

// The function takes a string input and returns the string "even" if the length of the input string is even and "odd" if the length is odd. Additionally, the function also checks if the input is not a string and returns a message asking for a valid input if that's the case.


