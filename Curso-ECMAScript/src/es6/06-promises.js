const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!!');
        } else{
            reject('Oops');
        }
    })
} 

anotherFuncion()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));