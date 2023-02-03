//template literals
let hello="hello"

let world="world"


let saludo =(hello,world) =>{
    return `${hello} ${world}`
}

saludo("hola","mundo")


//multi-line Strings

let lorem="esto es un string  \n" + "esto es otra linea "
//ES6

let lorem2=`Esta es una frase epica
Esta es la continuacion 
`

console.log(lorem);
console.log(lorem2);