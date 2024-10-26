//metodos que modifican un arreglo original (mutabilidad)
//push añade uno o mas elementos al final del array
const paises = ['USA', 'CANADA', 'CHILE'];
const nuevoPaises = paises.push('ALEMANIA','AUSTRALIA');

console.log(paises);
console.log(nuevoPaises);

//POP() Elimina elementos 
const eliminaPais = paises.pop();
console.log(paises);
console.log(eliminaPais);