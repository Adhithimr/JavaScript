// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
}
//console.log(element) 

for (let j = 0; j <= 10; j++) {
    console.log(`Outer loop ${j}`);
    for (let i = 0; i <= 10; i++) {
        const element = [i];
        //console.log(`Inner loop ${i}`);
            console.log(j + "*" + i + "=" + j*i);
    }
    const element = [j];
}
// break and continue
// break is used to stop the execution
// continue is used to skip the iteration

for (let index = 0; index <=24; index++) {
    if(index  == 5) {
        console.log("55555555555555555");
        //break;
        continue;
    }
   console.log(`value of i is ${index}`);
    
}