const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 1 a 10'));

console.log(`Este es el numero con el que juegas; ${numeroJugador}`);
console.log(`El numero secreto es: ${numeroSecreto}`);

if (numeroJugador === numeroSecreto){
    console.log('Felicidades adivinaste el numero secreto');

} else if (numeroJugador < numeroSecreto){
    console.log('El numero es demasiado bajo, intenta nuevamente');
}else{
    console.log('El numero es demasiado alto, intenta nuevamente');
}