//Immediately Invoked Function expression

 (function pizza() { //name iife
    console.log(`DB connected`);
 })();    // ; ends the invoked function

 (function toppin() {
    console.log(`DB connected 2`)
 }) ();

 ((name) => { //parameter iife
    console.log(`DB connected ${name}`)
 })('Adhithi');

 