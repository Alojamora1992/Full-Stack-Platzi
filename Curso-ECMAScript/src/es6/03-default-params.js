//Forma tradicional.
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 24;
    var country = country || 'Colombian';
    console.log(name, age, country);
}
newUser();
newUser( 'Carlos', 30, 'colombian');

//Forma ECMAScript
function newAdmin(name = 'David', age = 30, country = 'Colombia'){
    console.log(name, age, country);
}

newAdmin();
newAdmin( 'Carlos', 30, 'colombian');