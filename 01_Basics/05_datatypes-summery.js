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