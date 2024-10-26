//funciones puras

//side effects
//1. modificar variables globales
//2. modificar parametros de una funcion
//3. solicitudes HTTP
//4. imprimir mensajes en pantalla o consola (alert - console.log)
//5. manipulacion del DOM (document objet model)
//6. obtener la hora

function sum (a, b) {
    return a + b;

}
 
function sum (a, b){
    console.log('A:' + a);//deja de ser una funcion pura
    return a + b;
}

let total = 0;
//ejemplo funcion impura
function sumSideEffect(){
    //total = total + a;
    total += a;
    return total;
}
//funcion pura
function square (x) {
    return x * x;
}

function addTen (y) {
    return y + 10;
}

const number = 5;   
const finalResult = addTen(square(number));
console.log(finalResult);

//funciones impuras