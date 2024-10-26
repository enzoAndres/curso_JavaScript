//1.- Tipo numerico y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2.- Notación cientifica
const cientifico = 5e3

//3.- numeros infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//operaciones aritméticas

//1.- Suma, Resta, Multiplicacion y Division
const suma = 3 + 4
const resta = 4 - 4
const Multiplicacion = 4 * 7
const division = 16 / 2

//2.- modulo y exponenciacion
const modulo =  15 % 8
const exponenciacion = 2 ** 3

//precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// operaciones avanzadas 
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
