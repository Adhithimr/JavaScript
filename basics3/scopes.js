//var c = 300
let a = 300


if (true) {    // block scope
    let a = 10
const b = 20
console. log("inn", a)

}             // block scope ends here

console.log(a)
//console.log(b)
//console.log(c)

function one() {
    const username = 'Adhithi'

    function two() {
        const web ="github"
        console.log(username)
    }
    //console.log(web)

    two()
}
//one()

if(true) {
    const username = 'Adhithi'
    if(username === 'Adhithi') {
        const web = 'github'
        console.log(username+web)
    }
    //console.log(web)
}
//console.log(username)

//+++++++++++++++++Interesting++++++++++++++++++++

function add1(num) {
 return num + 1
}
console.log(add1(5))
//add2(5) hoisting
const add2 = function(num) {
    return num + 2
}
add2(5)