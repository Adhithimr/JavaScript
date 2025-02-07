const accountId = 123456
let accountemail = "Adhithi@gmail.com"
var accountPassword = "adhithi@gmail.com"
accountCity = "Bengaluru" 
let accountstate 
/*
Do not prefer var because of issue in the block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountemail, accountPassword, accountCity, accountstate])