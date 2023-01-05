const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

console.log(objetoReferencia === objetoOriginal)   // true  
console.log(objetoOriginal === objetoCopia)        // false