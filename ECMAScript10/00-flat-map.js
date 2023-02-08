//flat
const array=[1,2,3,4,[1,2,3,4,[5,4,3]]]

console.log(array);
console.log(array.flat(3));

//flat map
const array2 =[1,2,3,4,5,5]

console.log(array2.flatMap(v=>
    [v,v*2]));