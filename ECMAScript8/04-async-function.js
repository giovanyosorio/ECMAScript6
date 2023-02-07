const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ?  setTimeout(()=> resolve("Asybnc"),2000)
        : reject(new Error("error"));
    })
}


const fn = async () => {
    const something=await fnAsync()
    console.log(something);
    console.log("hello");
}

console.log("before");
fn()
console.log("after");