const MyArray = [1,2,3,4,5,6]


// Array Methods


// MyArray.push(10)
// MyArray.push(9)
// MyArray.pop()
// MyArray.unshift(9)
// MyArray.shift()
// console.log(MyArray.includes(9));
// console.log(MyArray.indexOf(9));
// const  newArray = MyArray.join();
// console.log(MyArray);
// console.log(typeof newArray);

// Slice and Splice Methods


const mynewArray = MyArray.slice(1,3)
console.log("A", MyArray);
console.log(mynewArray);

const mynewArray2 = MyArray.splice(1,3)
console.log("B", MyArray);
console.log(mynewArray2);
