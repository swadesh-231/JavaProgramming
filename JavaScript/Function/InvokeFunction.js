//*******/ Immediately Invoked Function Expressions IIFE/********/


// const chai = () => {
//     console.log("Hey There");
// };chai()

(function() {
    console.log("DB conected");
})();

(() => {
    console.log("DB Conected Two");
})()
