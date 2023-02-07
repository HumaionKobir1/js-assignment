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

const result = mindGame(5);
console.log(result);

/* I do for this problem. First of all Multiply the input number by 3, add 10 to the result, subtract 2 from the result, subtract 5 from the result, and return the final result of this operation. */
