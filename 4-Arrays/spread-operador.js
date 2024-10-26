//spread operador
//1. crear copias de un array
const originalArray = [1, 2, 3, 4, 5];
const copiaArray =  [...originalArray];

console.log(originalArray);
console.log(copiaArray);

//2. combinar arrays

const numerosUno = [1, 2, 3, 4];
const numeroDos = [5, 6, 7, 8];
const combinar = [...numerosUno, ...numeroDos];

console.log(numerosUno);
console.log(numeroDos);
console.log(combinar);

//3 combina arrays con elementos adicionales

const baseArray = [11, 2, 3];
const AdicionalesArray = [...baseArray, 4, 5, 6];

console.log[baseArray];
console.log(AdicionalesArray);

//4 pasar elementos 

function sumar (a, b, c) {
    
    return a + b + c;

}

const numerosSumar = [1, 2, 3];
const resultado = sumar(...numerosSumar);

console.log(resultado);