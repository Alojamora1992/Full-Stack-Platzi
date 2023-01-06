//function a ser llamada
function sum(num1, num2) {
    return num1 + num2;
}

//function callback
function calc(num1,num2,callback){
    return callback(num1,num2);
}

//Note que no tiene argumentos la función suma, puesto que le estamos haciendo callback en Calc
console.log(calc(3,7,sum));


/*SetTimeout(): Permite ejecutar código en un tiempo determinado. */

function greet(name){
    console.log(`Hi QA Engineer ${name}`);
}

setTimeout(greet, 2000, 'Carlos');