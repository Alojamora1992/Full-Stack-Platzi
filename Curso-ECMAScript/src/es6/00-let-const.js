//Se puede reasignar
var lastName = 'David'; //Declaración y asignación.
lastName = 'Oscar';     //Reasignación.
console.log(lastName);

let fruit = 'apple';
fruit = 'strawberry';
console.log(fruit);

//No se puede reasignar
const animal = 'Dog';
animal = 'Snake';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'banana';  // function scope
        let fruit2 = 'Orange';  // block scope
        const fruit3 = 'apple'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();