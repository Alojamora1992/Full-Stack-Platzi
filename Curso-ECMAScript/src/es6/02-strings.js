/*
*******Las plantillas literales (template literals) ******

consisten en crear cadenas de caracteres 
que puedan contener variables sin utilizar la concatenación. Esto mejora la legibilidad 
y la mantenibilidad del código.

****Cómo utilizar las plantillas literales******

Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ( ` ),
que no es una comilla simple ( ’ ), para envolver el mensaje. Para incluir las variables 
se utiliza la sintaxis ${variable}.
*/

//Forma tradicional.  
let hi = 'hello';
let w  = 'world';
let phrase = hi + ' ' + w + '!';
console.log(phrase);

// Forma template literals Alt Gr + }
let phrase_with_template = `${hi} ${w}!`;
console.log(phrase_with_template);

//Multi-line strings
let text = 'esto es un string \n' + 'Otra linea';
console.log(text);
let text_with_template = `Esto es un ej de multilinea
basado en template literals`;
console.log(text_with_template);