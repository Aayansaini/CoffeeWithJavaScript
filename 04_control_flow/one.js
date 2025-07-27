const score = 200;

if (score > 100) {
  let power = "Fly";
  console.log(`User Power Is : ${power}`);
}

if (score < 500) {
  console.log("less then 500");
} else {
  console.log("temperature is greater than 500");
}

const userlogin = true;

const userninfo = true;

const userpassword = false;

if (userlogin && userninfo && 2 == 2) {
  console.log("allow to buy a course");
}

if (userlogin || userpassword) {
  console.log("userlogin");
}
