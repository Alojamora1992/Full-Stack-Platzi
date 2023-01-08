import fetch, { Response } from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error));

//Llamado multiple
fetchData(`${API}/products`)
    //1ra solicitud
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    //2da solicitud
    .then (response => response.json())
    .then (product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    //3ra solicitud
    .then (response => response.json())
    .then (category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally (() => console.log('Finally'));