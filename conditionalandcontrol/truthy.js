const userEmail = 'adhiti@gmail.com'

if(userEmail) {
    console.log('Users email');
} else {
    console.log("don't have user email");
}

// falsy values
//false, 0, -0, BigInt 0n, "",null, undefined, NaN
//truthy values
// [], Number, Symbol, "0",'false', " ",{}, function(){}
const user = []
if(user.length === 0) {
console.log("Array is empty");
}

const object = {}
if(Object.keys(object).length === 0) {
    console.log("Object is empty");
}