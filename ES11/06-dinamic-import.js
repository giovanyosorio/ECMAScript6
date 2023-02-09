

const button=document.getElementById("btn")

button.addEventListener('click',async function () {
    const module=await import ('./module.js')
    console.log(module);
    module.sum(6,3)
})

function solution(numbers) {
    let multiplicadores=[3,4,5,6,7,8]
    let factor =numbers[0]/multiplicadores[0]
    for (let index = 0; index < multiplicadores.length; index++) {
        let element =numbers[index]/ multiplicadores[index] ;
        if (factor!=element) {
            console.log("false");
        }
    else{
        console.log("true");
    }

  
    }
}
solution([27, 36, 45, 54, 63, 72])
solution([27, 36, 45, 54, 42, 72])

function solution1(num1,num2) {
    let multiplicacion=num1*num2+num1
    let res=num1-num2
    let solucion=multiplicacion+""+res
    console.log(solucion);
}

solution1(3,2)