
const mySym = Symbol("Key1")


const juser = {
    name: "swadesh",
    "fullName": "swadesh chatterjee",
    age: 22,
    [mySym]: "mySymbol", //Use as a symbol
    city: "Bankura",
    email: "swadesh22@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["Sunday", "Monday", "Tuesday"]
}


console.log(juser.name);
console.log(juser.email);
console.log(juser["fullName"]); 
console.log(juser[mySym]);
juser.email = "chomu43@gmail.com";
console.log(juser);

Object.freeze(juser)
console.log(juser);
juser.email = "chomu43@gmail.com";
console.log(`my name ${juser.name}`);
