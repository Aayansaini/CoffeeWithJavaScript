

const myname = [1,2,3]

// const mytotal = myname.reduce(function(acc,currevalue){
//     console.log(`acc : ${acc} and currevalue : ${currevalue}`)
//     return acc + currevalue
// }, 0 )

// ARROW FUNTION USING 

const mytotal = myname.reduce((acc,currevalue)=>acc+currevalue ,0)    

console.log(mytotal)

const shoopingCart = [
    {
        item : "Bagpack",
        price : 2999
    },
    {
        item : "Laptop",
        price : 75999
    },
    {
        item : "Bottle",
        price : 4999
    },
]

const total = shoopingCart.reduce((acc,item) => acc+item.price ,0)

console.log(total)