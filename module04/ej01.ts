console.log(addNumbers(1, 2))

function addNumbers (x: number, y: number): number {
    return x + y;
 }

 let addNumbers2 = function (x: number, y: number): number {
    return x
    + y;
 }
 console.log( addNumbers2(1, 2));

 let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number =>{
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }

 console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));  // Devuelve 28
 console.log(addAllNumbers(2));                    // Devuelve 2
 console.log(addAllNumbers(2, 3, 0));        // Marca error debido al tipo de datos en tiempo de compilación, devuelve 5

 interface Message {
    text: string;
    sender: string;
    description:string;
 }

 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }

 displayMessage({sender: 'Christopher', text: 'hello, world',description:'attribute not called'});

//type Calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumbers3: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbers3(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2));