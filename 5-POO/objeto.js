/* 
Un Objeto es una estructura de datos

key / value

objeto {

propiedad  : valor,
propiedad  : valor,
propiedad : valor
metodos // funciones adentro de objetos

}

*/

const persona = {
    nombre : 'Enzo',
    Edad : 30,
    Direccion : {
        calle : 'Av Arauco',
        ciudad : 'La Serena',
        Numero : 5440
    },
    saludar () {

        console.log(`Hola, mi nombre es ${persona.nombre}`);

    }
};

console.log(persona.saludar());