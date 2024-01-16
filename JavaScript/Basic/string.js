let name ="swadesh ";
let rollNo = 50;

// console.log(name + rollNo + " NoobCoder");

console.log(`My name is ${name} and my roll is ${rollNo}`);

const gameName = new String("Bankura-Kolkata-Dehigh")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('D'));

const NewString = gameName.substring(0,5)
console.log(NewString);

const anotherString = gameName.slice(-6,4)

console.log(anotherString);

const newString = "    UnderArrest     "
console.log(newString);
console.log(newString.trim());

const url = "swadeshchatterjee512$gmail.com";
console.log(url.replace('$','@'));
console.log(url.includes('swadeshchatterjee512'));

const chomuName = "chomu-tomu-ponus"
console.log(chomuName.split('-'));