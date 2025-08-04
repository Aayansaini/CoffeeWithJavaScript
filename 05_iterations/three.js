

const arr = [2,3,4,5,6]


for (const num of arr) {
    console.log(num)
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if(" " === greetings){
        continue
    }
    console.log(`Each Character is ${greet}`)
}

const map = new Map()     /*maps always famous with unique values*/

map.set(`IN` , "INDIA")
map.set(`USA` , "UNITED STATES OF AMERICA")
map.set(`FR` , "FRANCE")

console.log(map)