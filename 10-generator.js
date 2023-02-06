function* iterate(array) {
    for (const iterator of array) {
        yield iterator
    }
}

const it=iterate(["hola","mundo","europa","oceania"])

console.log(it.next().value) ;console.log(it.next().value); console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);

function* getId(mumbers) {
    // Tu código aquí 👈
    for (let index of mumbers){
      yield index
    }
  }
  
  const id = getId([1,2,3])
  id.next().value
  id.next().value
  id.next().value