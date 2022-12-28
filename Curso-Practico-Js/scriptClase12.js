const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

// form.addEventListener('submit',Calcular);

// function Calcular(event) {
//     event.preventDefault();
//     const suma = +input1.value + +input2.value;
//     result.innerHTML = "Resultado: " + suma;
// }

btn.addEventListener('click', Calcular)

function Calcular(event) {
  // console.log({event});
  // event.preventDefault();
  const suma = +input1.value + +input2.value;
  result.innerText = "Resultado: " + suma;
}