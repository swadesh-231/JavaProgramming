const accountId = 144553;
let accountEmail = "swadeshchatterjee512@gmail.com";
var accountPass = "12345";
accountCity = "Kolkata";
let accountState;
// accountId = 2; //Not alowed
/*
Prefer not to use Var
Because of issue in block scope and functional scope
*/
accountEmail = "hc@gmail.com";
accountPass = "1234567";
accountCity = "Puara";
// console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);