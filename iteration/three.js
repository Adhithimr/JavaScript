// for of loop

const arr = [1,2,3,4,5]
for (const iterator of arr) {
    console.log(iterator);
}

const greetings = "Hello, world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// maps 

const map = new Map()
map.set('IN', "India")
map.set("USA","United States of America");
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}
//for (const [key,value] of myObject) {
  //  
//}