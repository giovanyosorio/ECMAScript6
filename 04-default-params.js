function newUser(name,age,country) {
    var name = name || 'Oscar'
    var age = age || 23
    var country = country || 'Colombia'

    console.log(name,age,country);
}
newUser()
newUser("giovany",27,"CO")


function newAdmin(name ="GO", age =27,country="CO") {
    console.log(name,age,country);
}
newAdmin()
newAdmin(28,"PE")