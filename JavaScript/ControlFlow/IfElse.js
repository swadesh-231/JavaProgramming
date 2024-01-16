// *** < > <= >= == != === !==

// Define two sample variables
// const a = 5;
// const b = 10;

// Perform comparisons
// const lessThan = a < b;
// const lessThanOrEqual = a <= b;
// const greaterThan = a > b;
// const greaterThanOrEqual = a >= b;
// const equal = a === b;
// const notEqual = a !== b;
// const strictEqual = a === 5; // Strict equality
// const strictNotEqual = b !== 10; // Strict inequality

// Output the results
// console.log(`Comparison Results:`);
// console.log(`a < b: ${lessThan}`);
// console.log(`a <= b: ${lessThanOrEqual}`);
// console.log(`a > b: ${greaterThan}`);
// console.log(`a >= b: ${greaterThanOrEqual}`);
// console.log(`a === b: ${equal}`);
// console.log(`a !== b: ${notEqual}`);
// console.log(`a === 5: ${strictEqual}`);
// console.log(`b !== 10: ${strictNotEqual}`);

const logInUser = true
const debitcard = true
const loginFromEmail = true
const loginFromGoogle = false
if(logInUser&&debitcard){
    console.log("Allow user");
}
if (loginFromEmail || loginFromGoogle) {
    console.log("Allow");
}

