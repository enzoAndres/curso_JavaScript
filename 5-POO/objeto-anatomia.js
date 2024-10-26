/* 
Un Objeto es una estructura de datos

key / value

objeto {

propiedad  : valor,
propiedad  : valor,
propiedad : valor
metodos // funciones adentro de objetos, acciones que pueden hacer los objetos

}

*/

const persona = {
    nombre : 'Enzo',
    Edad : 33,
    direccion : {
        calle : 'Av Arauco 5440',
        ciudad : 'La Serena'
    },
    saludar (){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar();

//agregar nueva propiedad
persona.telefono = '555-555-555';
console.log(persona.telefono);

//agregar nuevo metodo
persona.despedir = () => {
    console.log('Adios');
};  

persona.despedir();

//borrar propiedad

delete persona.telefono;
console.log(persona);

//borrar metodo

delete persona.despedir;
console.log(persona);