//clases
//declarando
class user {

}
//instancia de una clase
//const newUser=new user() 


class User {
    //metodos
    greeting() {
        return "hello world"
    }
}

const gio = new User()

let saludo = gio.greeting()
console.log(saludo);

const bebeloper = new User()
console.log(bebeloper.greeting())


//constructor 

class user {
    //constructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return "hello world"
    }
}

const gndx = new user()

//this hace referencia al elemento padre que lo contiene

class user {
    constructor(name, lastname) {
        this.name = name,
            this.lastname = lastname
    }
    //metodos
    speak() {
        return "hello"
    }
    greeting() {
        return `${this.speak()} ${this.name} ${this.lastname}`
    }
}

const ana = new user("g", "rodrigufadsez")

console.log(ana.greeting());

//setters and getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //metodo
    speak() {
        return "hello"
    }

    greeting() {
        return `${this.speak()} ${this.name} ${this.age}`
    }
    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n
    }

}

const gogo= new user("go",27)

console.log(gogo.uAge);
console.log(gogo.uAge=20);