const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');

//Cuando lo agregamos con el método queryselector, debemos ponerle la etiqueta #id
//const pid = document.querySelector('#id');
//Cuando agrego un id con el método getElementById, no necesito pasar el parametro #id 
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1, p, parrafo, pid, input
});
//Update the value of h1.
h1.innerHTML = 'CyberPunk';

console.log(h1.getAttribute('class'));

//Update the attribute "class"
h1.setAttribute('class','QA-Engineer')

//Imprimir en consola el atributo "clase"
console.log(h1.getAttribute('class'));

//Métodos de trabajar con classlist.
h1.classList.add('Dev-Ops');
h1.classList.add('Data-Scients');
h1.classList.remove('Dev-Ops');

//Update the input value.
input.value = "Alojamora."

//Creación de una imagen.
const img = document.createElement('img');

//Agregando los atributos de la imagen
img.setAttribute('src', 'https://media.istockphoto.com/id/1394562252/es/foto/metaverse-city-y-concepto-cyberpunk-renderizado-3d.jpg?s=612x612&w=0&k=20&c=dxVhMxZVcH_1LTcto_q82Aaa5ZsE9mXEUsSSz3jjtpg=');

console.log(img);
//Adicionando el elemento img -> p #id.
pid.append(img);
