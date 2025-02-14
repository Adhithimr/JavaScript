const promise1 = new Promise(function(resolve, reject){
    //DO AN ASYN task
    setTimeout(function(){
        console.log('Asyn task is completed');
        resolve()
    },1000)
})

promise1.then(function() {
    console.log("Promise consumed")
}) //connected to resolve

new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Asyn task 2");
        resolve();
    },1000)
}).then(function() {
    console.log('Async task resolved');
})
const promise3 = new Promise(function(resolve,reject) {
    setTimeout(function(){
resolve({username:"Adhithi",email:"adhiti@gmail.com"})
    },1000)
})

promise3.then(function(user) {
console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:'Adhithi',pass:"1234"});
        } else {
            reject('Something else went wrong');
        }
    },1000)
})
promise4
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username) => {
console.log(username)
})
.catch(function(error) {
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'))

const promise5 = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:'JavaScript',pass:"1234"});
        } else {
            reject('JavaScript went wrong');
        }
    },1000)
})

async function consumePromise(){ 

try {
     const respose = await promise5
console.log(respose);
} catch (error){
    console.log(error)
}
}
consumePromise()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log("E:",error);
}
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(() =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))