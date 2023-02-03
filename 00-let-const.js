var lastName = "david"

lastName="oscar"

// se puede cambiar de valor

let fruit ="apple"

fruit = "orange"
// se puede reasignar el valor junto con var

const animal ="dog"
animal ="cat"

//no se puede reeasignar un valor con const

const fruits = ()=>{
    if(true)
    {
        var fruit1 ="apple"//function scope
        let fruit2="kiwi" //local scope
        const fruit3="banana"//block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()