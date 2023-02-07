const array =[1,2,3,4,5]


console.log(array.includes(9))

const names =["david","oscar","go"]

console.log(names.includes("GO"))

const letras = { a: 1, b: 2, c: 3 }

"a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true