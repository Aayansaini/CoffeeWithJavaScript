// falsy values

// false , 0 , -0, BigInt On, "", null ,undefined , NaN

// Truthy Values

// "0" , 'false', " " , [] , {} , function(){}

const useremail = [];

if (useremail.length === 0) {
  console.log("Array is empty");
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty")
}


// NUllish Coalescing operator (??) : null or undefined

let val1 

val1 = 5 ?? 60        /*null or undefined based on this operator*/

console.log(val1)

// Terniary Operator 

// condition ? true : false

const apecodercourseprice = 3000

apecodercourseprice >= 2000 ? console.log("Applicable") : console.log("Not Applicable")
