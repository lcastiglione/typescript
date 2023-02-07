function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}


let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);

numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
stringArray.push('This is not a number');   // OK
numberArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK

type ValidTypes = string | number;

function identity2<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;
    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity2<number, string>(100, 'Hello');
let stringValue = identity2<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }

  let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
  let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

  //console.log(getPets(pets1, "fish"));  // Returns 6
  //console.log(getPets(pets2, "3"));     // Error

  interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
//let returnString1 = processor('Hello!', 100);   // Type check error

interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentityClass<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processorData = new ProcessIdentityClass<number, string>(100, 'Hello');
processorData.process();           // Displays 'Hello'
//processorData.value = '100';       // Type check error

class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}

class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}

class Truck extends Car {
    make = 'Truck';
    doors = 2
}

function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
/*
Muestra en consola:

"All 4 doors are closed."
"The Electric Car is now accelerating!"
*/
let myTruck = new Truck;
accelerate<Truck>(myTruck);
/*
Muestra en consola:

"All 2 doors are closed."
"The Truck is now accelerating!"
*/