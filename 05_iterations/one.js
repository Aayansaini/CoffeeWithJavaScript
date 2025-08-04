for (let index = 0; index <= 10; index++) {
    const element = index;

    if(element == 5){
        console.log(" 5 Is Best Number ")
    }

    console.log(element)
}


for(let i = 1 ; i <= 10; i++){

    console.log(`outer loop value ${i}`)
    for(let j = 1; j<=10; j++){
        // console.log(`inner value ${j} and inner loop value ${i} `)
        console.log(i + `*` + j + `=` + i*j)
    }

}

let Brands = ["oppo", "apple","moto"]

for (let index = 0; index < Brands.length; index++) {

if(index == 1){
    console.log(`Detected : apple `)
    break
    
}

    const element = Brands[index];

    console.log(element)
    
}