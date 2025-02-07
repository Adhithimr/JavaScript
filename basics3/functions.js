console.log("A")
console.log("d")
console.log("i")

function sayMyname () {
    console.log("A")
console.log("d")
console.log("i")
}

//sayMyname()

//function add(num1 , num2) {    //(num1, num2) are parameters
   // console.log(num1+num2)
//}
function addnum(num1,num2) {
//let result = num1 + num2
//console.log("i")
return num1+num2
}
//add(3,4)  //(3,4) are arguments

//const result = add(3,4)
//console.log("Result", result)

function loginMessage(username="Adhithi") {
 return `${username} just logged in!!!!!`
}
//console.log(loginMessage("Adhithi"))
console.log(loginMessage())


function calculateCartPrice(...num1) {    // ...is called rest 
    return num1
}

console.log(calculateCartPrice(2, 35,56,67))

// function cal(val1, val2,...num1) gives the output [56,67]



function handleObject(anyobject) {
console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
//handleobject 
handleObject({
    username:'Adhithi',
    price: 4555
})
const myarr =[200,400,600]
function returnval(getArray) {
    return getArray[1]
}
console.log(returnval(myarr))
console.log(returnval([200,400,600]))