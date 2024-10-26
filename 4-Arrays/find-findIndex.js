//find() 
//retorna el primer elemento dentro de un array que cumpla
//la condicion

const multiplosCinco = [5, 10, 15, 20];
const primerNumeroMayorDiez = multiplosCinco.find( numero => numero > 10);
 
console.log(multiplosCinco);
console.log(primerNumeroMayorDiez);

//findIndex()
//devuelve el indice del primer elemento que cumpla la condicion

const randomNumeros = [6, 14, 27, 56, 40];
const indexNumero = randomNumeros.findIndex(numeros => numeros > 50);

console.log(randomNumeros);
console.log(indexNumero);