/* 

this se utiliza mucho en clases o funciones constructoras
this hace referencia a la clase o al objeto que estamos construyendo

*/

class Persona{
    constructor (p_nombre, p_edad) {
        this.nombre = p_nombre;
        this.edad = p_edad;

    }
}

const persona1 = new Persona('Enzo', 30);

console.log(persona1);

persona1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`);
}

persona1.nuevoMetodo();


