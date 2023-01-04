//Forma tradiccional
function square1 (num){
    return num*num;
}
console.log(square1(2));

//Forma arrow con más de 1 argumento.
const square2 = (num) => {
    return (num*num);
}
console.log(square2(3));

//Forma Arrow: con el return implicito
const square3 = num => num*num;
console.log(square3(4));