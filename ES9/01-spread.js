const user ={
    username:"go",
    age:26,
    country:"CO"
}

const {username,...values}=user

console.log(username);
console.log(values);

const original1 = { datos: [1, [2, 3], 4, 5] }
const copia1 = { ...original }

original1 === copia1 // false
original1["datos"] === copia1["datos"]//true

const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false