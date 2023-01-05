// new set(), crea un array que no admite elementos repetidos.
const list = new Set();

list.add('item1');
list.add('item1').add('item2').add('item3').add('item5');

console.log(list);