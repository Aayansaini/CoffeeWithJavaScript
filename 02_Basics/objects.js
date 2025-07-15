
// OBJECT LITERELS 

const mysym = Symbol("key1")

const obj = {
    name : "Aayan",
    class : 8,
    age : 14,
    [mysym] : "mykey1",
    gender : "male",
    email : "aayangoogle.com"
}

console.log(obj.name)

console.log(obj["name"])

console.log(obj[mysym])

obj.email = "aayan@googlii.com"

Object.freeze(obj);
obj.email = "aayan@go.com"

console.log(obj)

let jsuser = {name :"Aayan"}

jsuser.greetings = function(){
    console.log(`Hello user , ${this.name}`);
}

console.log(jsuser.greetings());

// SINGLETON

const tinderUser = {}

tinderUser.id = "24mcan0333"
tinderUser.name = "Aayan"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "id@gmail.com",
    fullName :{
        userfullname :{
            firstname : "Aayan",
            lastname : "Saini"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {1 : "a" , 2 : "b"}

const obj2 = {3 : "c" , 4 : "d"}

const obj3 = {5 : "e" , 6 : "f"}

// const obj4 = Object.assign( {}, obj1, obj2, obj3 )

const obj4 = {...obj1 , ...obj2, ...obj3}  /*90% using this syntax its eassy and best*/

console.log(obj4)

const users =[
    {
        id : 1, 
        email :"some@gmail.com"
    } ,
    {
        id : 1, 
        email :"some@gmail.com"
    } ,
    {
        id : 1, 
        email :"some@gmail.com"
    } ,
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// DESTRUCTURING

const course = {
    coursename : "ApecoderClass",
    price : 999,
    courseInstructor : "Aayan"
}

const {courseInstructor : instrutor} = course

console.log(instrutor)

// {   its a JSON 🎯
//     "name" : "aayan" ,
//     "class" : "mca23"
// }

// Array

// [
//     {},
//     {},
//     {}
// ]

