// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("Aug");
//         break;
//     default:
//         console.log("The case is not found!");
//         break;
// }

// **************Falsy value**********//
// false: The Boolean value false.
// 0: The number zero (0).
// -0: Negative zero (-0).
// 0n: BigInt zero.
// "": An empty string.
// null: A special value representing null or no value.
// undefined: A special value representing an undefined value.
// NaN: Not-a-Number, which indicates an invalid or unrepresentable value.

// ********************Truthy Values***************************

// true: The Boolean value true.
// Numbers: Any non-zero number, including positive and negative numbers, as well as decimal numbers.
// Strings: Any non-empty string, including whitespace characters.
// Objects: Any non-null object.
// Arrays: Any non-empty array.
// Functions: Any function object, including built-in functions and user-defined functions.
// Symbols: Any symbol, which is a new primitive type introduced in ECMAScript 2015.

const userEmail = []
if (userEmail.length ===0) {
    console.log("Array is empty");
    
}

const userObj = {}
if (Object.keys(userObj).length === 0) {
    console.log("Empty Object");
}
// ***** Nullish Coalescing Operator(??):Null Undified


let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? null ?? 10 ?? 15
console.log(val1);

// ********Terniary Operator

//condition: true ? false

let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); 

  