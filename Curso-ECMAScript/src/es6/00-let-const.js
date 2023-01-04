var lastName = 'David'; //Declaración y asignación de una variable
lastName = 'Oscar';      //Reasignación.
console.log(lastName);

let fruit = 'apple';
fruit = 'strawberry';
console.log(fruit);

const animal = 'Dog';
animal = 'snake';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Banana'; //function scope
        let fruit2 = 'orange'; //block scope
        const fruit3 = 'apple';//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();