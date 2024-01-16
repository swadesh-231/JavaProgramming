// const user = {
//     userName: "swadesh",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`Welcome to website ${this.userName}`);
//     }
// }
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// function hell(){
//     let userName = "swadesh"
//     console.log(this.userName);
// }
// hell()

// const hell = () =>{
//     let userName = "swadesh"
//     console.log(this.userName);
// }

// console.log(hell());

// const twoNum= (num1,num2) =>{
//     return num1+num2
// }

// console.log(twoNum(3,5));

// const TwoSum = (num1,num2)=> num1+num2

// console.log(TwoSum(34,54));

const welcome = ()=> ({username : "Swadesh"})
console.log(welcome());