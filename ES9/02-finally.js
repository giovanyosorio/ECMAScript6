
const a =5
let b=3
/*
function sum(num1,num2) {
    return new Promise((resolve, reject) => {
        let result = num1+num2
    }).then(result)
}
*/

const suma  =(num1,num2)=> {
    return new Promise((resolve, reject) => {
        if (num1>num2) {
            resolve("es mayor ")
        }else{
            reject("no es mayor")
        }
    })
}


suma(1,4).then(response=>{
    console.log(response);
})
.catch(reject=>{
    console.log(reject);
})
.finally(()=>{
    console.log("finnally");
})