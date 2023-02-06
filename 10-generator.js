function* iterate(array) {
    for (const iterator of array) {
        yield iterator
    }
}

const it=iterate(["hola","mundo","europa","oceania"])

console.log(it.next().value) ;console.log(it.next().value); console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);