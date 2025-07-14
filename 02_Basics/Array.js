const fruits = ["mango", "apple", "banana"]

const veg = ["potato", "carrot" , "radish"]

// fruits.push(veg)

// console.log(fruits)

const result = fruits.concat(veg)

// console.log(result)

const all = [...fruits , ...veg]

console.log(all);

const another_array = [1,2,3,4,5,[6,7],[8,9,10,[11,22,33,[44,55,66,77]]]]

const real = another_array.flat(Infinity)

console.log(real)
console.log(Array.from("aayan"))
console.log(Array.from({name:"aayan"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))