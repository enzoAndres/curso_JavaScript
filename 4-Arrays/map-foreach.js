//map() 
//permita aplicar una funcion a cada elemento del array
//y construir un nuevo array con el resultado

const numeros = [1, 2, 3, 4, 5];
const numerosAlCuadrado = numeros.map(num => num * num);

console.log(numeros);
console.log(numerosAlCuadrado);

//foreach()
//itera por cada elemento del array ejecutando una funcion proporcionada
//para cada elemento sin crear un nuevo array

const colores = ['rojo', 'azul', 'amarillo'];
const iteracionColores = colores.forEach(color => console.log(color));

console.log(colores);
console.log(iteracionColores);

//ejercicio farenheit a celsius conversion
const temperaturasEnFarenheit = [32, 68, 95, 104, 212];
const temperaturasEnCelsius =  temperaturasEnFarenheit.map( farenheit => (5/9) * (farenheit - 32));

console.log('Temperaturas en Farenheit: ' + temperaturasEnFarenheit);
console.log('Temperaturas en Celsius: ' + temperaturasEnCelsius);

//ejercicio de suma de todos los elementos

const numerosEjercicio = [1, 2, 3, 4, 5];
let sumaEjercicio = 0;

numerosEjercicio.forEach( numerosE => {
    sumaEjercicio += numerosE;
})

console.log('Array de numeros: ', numerosEjercicio);
console.log('suma de los numero: ', sumaEjercicio);