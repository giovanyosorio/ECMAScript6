//spread operator

let person ={name:"GO",age:25}

let country="CO"

let data = {id:1,...person,country}

console.log(data);

//rest

function sum(num,...values) {
    console.log(values);
    console.log(num+values[0]);
    return num + values[0]
}

sum(2,5,7,8) 
sum(3,"hola","mundo")
sum(0,1)


export function solution(

    JSON1 = {
        name: "Mr. Michi",
        food: "Pescado"
    }, JSON2 = {
        age: 12,
        color: "Blanco"
    }) {
    return {
        ...JSON1,
        ...JSON2
    }
    // Tu código aquí 👈
}