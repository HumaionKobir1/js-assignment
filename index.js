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





// Problem-3

function isLGSeven (num) {
    const difference = num - 7;
    if (typeof num != 'number'){
        return "please enter a valid number"
    }
    else if (difference < 7 ){
        return difference;
    }
    else{
        return num * 2;
    }
}

const result = 15;
console.log(isLGSeven(result));

// The function takes a number as input and calculates the difference between the input and 7. If the difference is less than 7, it returns the difference, otherwise, it returns double the input.




// Problem - 4

function findingBadData (arrNum) {
    let badData = 0;
    const remaining = arrNum.length;
    
    for (let i = 0; i < remaining; i++) {
        const index = i;
        const element = arrNum[index];

        if (typeof arrNum[i] != 'number'){
            return "please enter the valid number";
        }
        else if (element < 0){
            badData++;
        }

    }
    return badData;
}

// The function findingBadData takes an array of numbers as an argument and returns the count of negative numbers in the array. The function uses a loop to iterate over each element in the array, checks if the element is less than 0, and increments the badData count if it is.




