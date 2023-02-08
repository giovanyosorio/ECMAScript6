async function* generator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other=generator()
other.next().then(response => console.log(response.value))

other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))

console.log("hello");


async function names(array) {
    for await (let index of array)

    console.log(index);
}

const name=names(["dsf","asd","dfs"])

console.log("afer");




function solution(numbers) {
    numbers.forEach(element => {
        if (element %9==0 ) {
        console.log("si");
        }
        else{
            console.log("no");
        }
     //   console.log(element);
    });
}


solution([27, 36, 45, 54, 63, 71232])
solution([27, 36, 45, 54, 42, 72])