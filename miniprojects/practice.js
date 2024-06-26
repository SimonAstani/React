const fName = "suman";
//inbuilt method
const reverseFName = fName.split("").reverse().join("");


// usign logic
/* 
1. for each in fName:

*/

function reverseString(string){
    const stack = []

    for (let char of string){
        stack.push(char);
    }

    rString = '';

    while(stack.length > 0){
        rString += stack.pop();
    }

    return rString;

}


// js to return even no from array list
let  evenArray = [];
function evenNo(array){
    array.forEach(element => {
        if(element % 2 === 0){
            evenArray.push(element);
        }

    });
    return evenArray;

}

// console.log(evenNo([1,3,2,6,8,7,11]));  



/* javascript to calculate factorial of given no
3! = 3*2*1
*/
function factorial(num){
    if (num ===0 || num === 1){
        return 1;

    }

    else{
        return num * factorial(num-1);
    }



}


/*
check no is prime or not
divisible by 1 and itself
*/

function primeNo(number){

    for(let i =2 ; i <= Math.sqrt(number); i++){
        if(number%i ===0){
            return false;

        }
        else{
            return true;
        }

    }
}

/*Find larget element in the nested arrray


*/
array = {   }

function largestElemtn(array){


}


/* clouser to access private varialbles.*/
 function a () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  const counter = a();
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
  
  console.log(counter.privateCounter);


// main.js
import { myVariable,myFunction } from "./circle";

console.log(myVariable); // Output: I am an exported variable
myFunction(); // Output: I am an exported function
