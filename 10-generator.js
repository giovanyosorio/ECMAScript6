function* iterate(array) {
    for (const iterator of array) {
        yield iterator
    }
}

const it = iterate(["hola", "mundo", "europa", "oceania"])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId() {
    // Tu código aquí 👈
    let Michi = 1
    while (true) {
        yield Michi++
    }

}


const id = getId([1, 2, 3])
id.next().value
id.next().value
id.next().value