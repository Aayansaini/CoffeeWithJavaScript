

const myobj = {

js : `javascript`,
cpp : `c++`,
rb : `ruby`,
swift : `swift By apple`

}

for (const key in myobj) {

    console.log(`${key} shortcut is for ${myobj[key]}`)
    
}

const mycoding = [
    {Brand : "Apple"},
    {Brand : "OnePlus"},
    {Brand : "Samsung"},
]

mycoding.forEach((item)=>{
console.log(item.Brand)
})