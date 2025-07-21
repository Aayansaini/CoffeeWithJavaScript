// // FUNCTIONS

// function sayhello() {
//   console.log("A");
//   console.log("A");
//   console.log("Y");
//   console.log("A");
//   console.log("N");
// }

// sayhello();

// function addtwonumber(num1, num2) {
//   console.log(num1 + num2);
// }

// addtwonumber(5, 5);

// function subtract(num3, num4) {
//   return num3 - num4;
// }

// const result = subtract(10, 5);

// console.log(result);


// function loginuser(username){
//     if(!username){
//         console.log("Please Enter a Username")
//     }
//     return `${username} just logged in `
// }

// const log = loginuser()

// console.log(log)

function calculatecartprice(...num1){
return num1
}

console.log(calculatecartprice(500, 300, 600, 800))

const user = {
  username : "AAYAN",
  price : 999
}

function handleObject(anyobject){
 console.log(`Username is ${anyobject.username} and it's price is ${anyobject.price}`) 
}

handleObject(user);

const mynewarray = [232,232,324,532,5545,656]

function aarayfun(getarray){
return getarray[2]
}

console.log(aarayfun(mynewarray))