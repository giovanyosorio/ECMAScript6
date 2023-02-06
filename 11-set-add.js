const list =new Set()

list.add("item1")

list.add("item2").add("item3")

console.log(list);

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos =[... new Set(array)]
console.log(sinRepetidos);