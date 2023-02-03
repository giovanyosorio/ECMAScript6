//desustructuracion arrays

let fruits =["apple","banana","grape"]


let [a,b,c]=fruits

console.log(a,fruits[1]);

// arrays destructuring
let fruits2 = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits2;

console.log(fruit); /*arroja "Orange"*/

//object destructuring

let user ={

    username:"Oscar",
    age:27

}
let {username,age} =user

console.log("go",24);
console.log(username,age);