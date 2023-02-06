// Ejemplo usando enum
console.log("Ejemplo usando enum")
enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); //Imprime 1

enum ContractStatus2 {
    Permanent=1,
    Temp,
    Apprentice
}

let employeeStatus2: ContractStatus2 = ContractStatus2.Temp;
console.log(employeeStatus2); //Imprime 2
console.log(ContractStatus2[employeeStatus2]); //Imprime el string 'Temp'
console.log(typeof ContractStatus2[employeeStatus2]); //Imprime el 'string'

// Ejemplo usando assertion
console.log("Ejemplo usando assertion")
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Imprime "MATEO" en la consola
} else {
    console.log("Error - A string was expected here.");    //* Devuleve un mensaje de error.
}

//Ejemplo usando uniones
console.log("Ejemplo usando uniones")
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Muestra "onetwo" en consola
console.log(add(1, 2));          //* Muestra 3 en consola
try {
    console.log(add('one', 2));
} catch (error:any) {
    console.log(error.message); //* Muestra error en consola
}


