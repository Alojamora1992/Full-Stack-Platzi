
function* iterador(array){
    for (let value of array){
        yield value;
    }
}

const i = iterador(['michi1', 'michi2', 'michi3', 'michi4']);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);