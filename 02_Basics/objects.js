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