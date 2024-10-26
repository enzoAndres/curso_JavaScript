/*
también conocido como clausura o cierre, es una función que recuerda y
tiene acceso al entorno en el que se creó, incluso después de que la 
función externa que la creó haya terminado de ejecutarse.

*/
function outerFunction () {
    let outerVariable = 'I am from outer function';
    
    function interFunction () {
        
        console.log(outerVariable);
    
    }

    return interFunction;
}

const closureFunction = outerFunction();
closureFunction();

function createCount () {
    let count = 0;

    return function (){

        count++;
        console.log(count);

    }
}

const counterA = createCount();
counterA();
counterA();

const counterB = createCount();
counterB();
counterB(); 

function outer () {
    let message = 'Hola, ';

    function innter (name){

        console.log(message + name);

    }

    return innter;
}
const clousureA = outer();
const clousureB = outer();

clousureA('Enzo');
clousureB('Gaspar');