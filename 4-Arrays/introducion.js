//como crear un array
//1.-  new array() o Array
const fruta = Array('platano', 'manzana', 'naranja');
console.log(fruta);

const justOneNumber = Array(12);
console.log(justOneNumber);

const numeros = Array(1,2,3,4,5,6,7,8,9);
console.log(numeros);

//sintaxis literal

const unNumero = [4];
console.log(unNumero);

const ArrayVacia = [];
console.log(ArrayVacia);

const deportes = ['Futbol', 'ciclismo', 'Rugby'];
console.log(deportes);

const recipienteIngredientes = [
    'Flour',
    true,
    2,
    {
        ingredientes: 'Leche',
        Cantidad: '1 taza'
    },
    false
]
console.log(recipienteIngredientes);    

//acceso a los elementos del array
 const primeraFruta = fruta[0];
 console.log(primeraFruta)

 //largo de un array

 const largoFruta = fruta.length;
 console.log(largoFruta);