/* 
las promesas tiene 3 estados 
promi
promise()

->Estados
pending  pendiente 
fullfilled cuando la promesa se resuelva
rejected cuando la promesa no se resolvio

callbacks
->manejan dos tipos de callback
resolve: cuando se resuelve satisfactoriamente
reject: cuando no se puede resolver 

then() es metodo cuando la promesa se resuelve 
catch() cuando la promesa no se resuelve y catch obtiene el error 
y logra mostrar cual es el error

*/


const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve('La operacion fue exitosa');
        } else {
            reject('fallo la operacion');
        }
    }, 2000);
});


promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
