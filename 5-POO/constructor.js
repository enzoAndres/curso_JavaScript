/*
const persona = {
    nombre : 'Enzo',
    apellido: 'Rojas'
}
funcion constructora 
*funcion de construir objetos 
*para poder construir 100 objetos persona necesitamos 
una funcion construtora

*/

function Persona (p_nombre, p_apellido, p_edad) {
    this.nombre = p_nombre;
    this.apellido = p_apellido;
    this.edad = p_edad;
}

//instancia se llaman a todos los objetos 
//que vengan de la funcion constructora

const persona1 = new Persona ('Enzo', 'Rojas', 30);
console.log(persona1);

const persona2 = new Persona ('Gaspar', 'Rojas', 6);
console.log(persona2);

//agregar nueva propiedad
Persona.prototype.telefono = '555-555-555';

persona1.nacionalidad = 'Chileno';


//nuevo metodo

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
persona2.saludar();
