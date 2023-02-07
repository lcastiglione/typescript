/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface.
    TODO: Declare the ConventionalLoan interface.
    TODO: Update the calculateInterestOnlyLoanPayment function.
*/

interface Loan {
    principal: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}

function calculateInterestOnlyLoanPayment(data:Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = data.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = data.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*
TODO: Update the calculateConventionalLoanPayment function.
*/

function calculateConventionalLoanPayment(dataConventionals:ConventionalLoan):string {
    let interest = dataConventionals.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = dataConventionals.principal * interest / (1 - (Math.pow(1 / (1 + interest), dataConventionals.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let data:Loan={
    principal:30000,
    interestRate:5
}

let dataConventional:ConventionalLoan={
    principal:30000,
    interestRate:5,
    months:180
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(data);
let conventionalPayment = calculateConventionalLoanPayment(dataConventional);

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"