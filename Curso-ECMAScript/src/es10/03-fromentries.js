/* Pasar de un array a un objecto*/

const entries = new Map([["name", "Oscar"],["age", 34],["country"]]);
console.log(Object.fromEntries(entries));