//filter() filtrado
//crea un nuevo array con elementos que cumplen una condicion
//dada por una funcion

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eventoNumero = number.filter( number =>  number % 2 === 0); //filtrar pares

console.log(number);
console.log(eventoNumero);

//reduce() reduce 
//ejecuta una funcion reductora sobre cada elemento de un array
//devolviendo  como resultado un unico valor
//caso 1
const numerosReduce = [1, 2, 3, 4, 5];
const sumaReduce = numerosReduce.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(numerosReduce);
console.log(sumaReduce);

//caso 2
const frutas =  ['manzana', 'platano', 'kiwi', 'limon', 'limon', 'platano'];
const frutasReduce = frutas.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){

        accumulator[currentValue]++;

    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(frutas);
console.log(frutasReduce);