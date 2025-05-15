// primitives

// 7-types :-

// String,Number,Boolean,null,undefined,Symbol,BigInt

// Reference (non-primitive)

// Array,Function,Object

const id = Symbol("555")

const anotherId = Symbol("555")

const BigNumber = 345345324535435234534534n

console.log(id === anotherId)

const hero = ["Batman","superman","spiderman"]
let myobject = {
    name: "Aayan",
    age : 22
}

const myfunction = function(){
    console.log("HEllo Aayan")
}

console.log(typeof BigInt )


// Stack (primitive) , Heap (Non-primitive)

let user = "aayan@.com"

let user2 = user;

console.log(user2)

let user3={
    name:"aayan",
    age : 22
}

let user4 =user3

user4.name = "Aayan"

console.log(user3)
console.log(user4)