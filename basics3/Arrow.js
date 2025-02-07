const user = {
    username: 'Adhithi',
    price:999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to web`);
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username = 'Ana'
//user.welcomeMessage()

//console.log(this);

//function pizza() {
  //  console.log(this);
//}
//pizza()

//const pizza = () => {
//console.log(this)
//}
//pizza()

const add = (num1,num2) => {
    return num1 +num2
}
console.log(add(3,6))

//const add1 = (num1,num2) => num1 +num2 // no use of return 
console.log(add(4,6))
