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

/*Description: I do for this problem. First of all Multiply the input number by 3, add 10 to the result, subtract 2 from the result, subtract 5 from the result, and return the final result of this operation. */



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

//Description: The function takes a string input and returns the string "even" if the length of the input string is even and "odd" if the length is odd. Additionally, the function also checks if the input is not a string and returns a message asking for a valid input if that's the case.





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

//Description: The function takes a number as input and calculates the difference between the input and 7. If the difference is less than 7, it returns the difference, otherwise, it returns double the input.




// Problem - 4

function findingBadData (arrNum) {
    let badData = 0;
    const remaining = arrNum.length;

    if (!Array.isArray(arrNum)){
        return "Please provide an array as input";
    }
    else if(arrNum[2] === undefined){
        return "Array does not have the 3 number";
    }
    
    for (let i = 0; i < remaining; i++) {
        const index = i;
        const element = arrNum[index];

        if (typeof arrNum[i] != 'number'){
            return "please enter the valid array and number"
        }
        else if (element < 0){
            badData++;
        }

    }
    return badData;
}

//Description: The function findingBadData takes an array of numbers as an argument and returns the count of negative numbers in the array. The function uses a loop to iterate over each element in the array, checks if the element is less than 0, and increments the badData count if it is.




// Problem-5

function gemsToDiamond (gem1, gem2, gem3){
    const firstFriend = gem1 * 21;
    const secondFriend = gem2 * 32;
    const thirdFriend = gem3 * 43;
    const total = firstFriend + secondFriend + thirdFriend;

    if (typeof gem1 != 'number' || typeof gem2 != 'number' || typeof gem3 != 'number'){
        return "please enter a valid number";
    }

    else if(total < 1000 * 2){
        return total;
    }

    else if (total >= 1000 * 2){
        return total - 2000;
    }
}

//Description: This function takes three inputs (gem1, gem2, and gem3), representing the number of gems each of three friends has. It then calculates the number of diamonds each friend can get based on the conversion rate of each friend. It sums up the total number of diamonds they can get and returns the result.




