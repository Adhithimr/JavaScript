//stack is used to store the primitive datatypes
//heap is used to store the non-primitive datatypes
let a1 = 'Adhithi'
let a2 = a1
console.log(a1) //This will be stored in the stack memory 
console.log(a2) // a2 will have the same value as a1 and in this stack memory will make a copy of a1 and store it as a2
a2 = 'Adhithi1111'
console.log(a2) // this will have the value adhithi1111
//heap memory
let user= {
    email: 'adhithimr@gmail.com',
    age: 23
}
let user1 = user

user1.email="adhiti@gmail.com"
console.log(user.email)
console.log(user1.email)// this will store in heap memory and email in both the functions will change to 'adhiti@gmail.com' as duplicate is not allowed in heap memory