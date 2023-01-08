function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Declaración de la función del Generador pasando un argumento
function* iterate(array){
    for(let value of array){ //El loop delfor revisa cada elemento del array
            yield value; //value es asignado en cada ciclo
        }
    }
    
    const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']);
    
    //la diferencia con el ejemplo anterior es que el iterador se le pasa un argumento
    console.log(it.next().value); //Imprime el primer elemento del array: Oscar
    console.log(it.next().value); //Imprime el segundo elemento del array: Omar
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value); //la consola indica "Undefined"