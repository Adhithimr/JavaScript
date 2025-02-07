// if
//if (condition) { // if ture this gets executed

//}     // <,>,==,===,!==,!=,>=,<=
//const isUserLoggedin = false
//if(isUserLoggedin === true) {
  //  console.log("logged in");
//} else {
  //  console.log("logged out")
//}

//const score = 200
//if(score>100) {
  //  const power = 'Fly'
//console.log(`User ${power}`);
//}

const balance = 3000
if(balance > 500) console.log('Balanced');

if(balance > 1000) {
    console.log(' 1000')
} else if(balance > 750) {
    console.log(" 750" )
} else if(balance > 500) {
    console.log(' 500')
} else {
    console.log(" 200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")