// for each loop

const coding = ['js','rb','py','c','java']

//coding.forEach(function (val){
  //  console.log(val);
//})
coding.forEach((item) => {
    console.log(item)
})

//functionprint(item) {
  //  console.log(item)
//}
//coding.forEach(print)

coding.forEach((item, index, arr) =>{
console.log(item,index,arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )