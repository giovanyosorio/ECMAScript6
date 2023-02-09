//setters and getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //metodo
    #speak() {
        return "hello"
    }

    greeting() {
        return `${this.speak()} ${this.name} ${this.age}`
    }
    get #uAge() {
        return this.age
    }
    set #uAge(n) {
        this.age = n
    }

}

const gogo= new user("go",27)

console.log(gogo.uAge);
console.log(gogo.uAge=20);