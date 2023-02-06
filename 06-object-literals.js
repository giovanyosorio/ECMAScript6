//enhaced object literals

function newUser(user,age,country,uId) {
    return {
        user,
        age,
        country,
        id:uId
    }
}

console.log(newUser("GO",28,"CO",1));