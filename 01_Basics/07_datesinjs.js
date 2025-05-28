let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let mycreatedDate = new Date('2023-10-01');

console.log(mycreatedDate.toLocaleString());

let myTimestamp = Date.now();

console.log(myTimestamp);

console.log(mycreatedDate.getTime());

let newDate;
newDate.toLocaleString('desfault',{
weekday: "long",
})