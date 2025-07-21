
let b = 500
if(true){
var a = 20
let b =40
const c = 50
}

console.log(a)
console.log(b)

// that's a concept of local scope and global scope

function one(){
    const username = "Aayan"

    function two(){
        const website = "youtube"
        console.log(username)
        console.log(website)
    }

    two()
}

one()

if(true){
    const username = "Aayan" 
    if(username === "Aayan"){
        const website = "youtube"
        console.log(username + website);
    }
}

function addone(num){
return num +1
}


const addtwo = function(num){
    return num + 2
}

console.log(addone(5))
console.log(addtwo(7))