//case
/*
switch (expresion){
    case 1: 
        //codigo ejecutar
        break;
    case 2:
        //codigo ejecutar
        break;
    case 3:
        //codigo ejecutar
        break;
    default:
        //codigo ejecutar
}
*/
let expresion = 'uvas'

switch (expresion) {
    case 'Naranjas':
        console.log('Las Naranjas cuestan $100.- el kilo');
        break;
    case 'Manzanas':
        console.log('Las Manzanas cuestan $430.- kilo');
        break;
    case 'Platano':
        console.log('los Platanos cuestan $600.- el kilo');
        break;
    case 'Limones':
        console.log('Las Limones cuestan $300.- el kilo');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('Las Papayas y los Mangos cuestan lo mismo $360.-');
        break;
    default:
        console.log(`No contamos con el producto: ${expresion}`);
}

console.log('Hay algo mas que deseas buscar');