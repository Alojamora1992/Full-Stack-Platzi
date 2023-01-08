const promise = new Promise(function(resolve,reject){
    resolve ('Hey')
});

const cow = 2;

const countCows = new Promise(function(resolve, reject){
    if(cow >10){
        resolve(`We have ${cow} cows in the farm`);
    }else{
        reject(`There is no enoughs cows i the farm`)
    }
});

//Tres estados de una promesa.
countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("Final de la promesa");
})