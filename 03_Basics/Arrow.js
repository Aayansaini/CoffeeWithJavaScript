const user ={
    username : "Aayan",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `)
        console.log(this)
    }
}

user.welcomeMessage()

user.username = " Saini "

user.welcomeMessage()

console.log(this)

// function coffee(){
//     let username = "Aayan"
//     console.log(this.username)
// }

// coffee()

// const coffeee = function(){
//     let username = "Aayan"
//     console.log(this.username)
// }

// coffeee()


// const coffeee = () => {
//     let username = "Aayan"
//     console.log(this)
// }

// coffeee()

// const addtwo=(num1,num2) => {
//     return num1+num2
// }

const addtwo=(num1,num2) => num1+num2


console.log(addtwo(5,5)) 
