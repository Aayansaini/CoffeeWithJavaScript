// FUNCTIONS

function sayhello() {
  console.log("A");
  console.log("A");
  console.log("Y");
  console.log("A");
  console.log("N");
}

sayhello();

function addtwonumber(num1, num2) {
  console.log(num1 + num2);
}

addtwonumber(5, 5);

function subtract(num3, num4) {
  return num3 - num4;
}

const result = subtract(10, 5);

console.log(result);


function loginuser(username){
    if(!username){
        console.log("Please Enter a Username")
    }
    return `${username} just logged in `
}

const log = loginuser()

console.log(log)