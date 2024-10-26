/*
clases ->  class
una clase es practicamente un model para crear nuevos objetos

*/
//blueprint
class Persona {
    constructor(p_nombre, p_edad) {
        this.nombre = p_nombre;
        this.edad = p_edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona1 = new Persona('Enzo', 33); 
console.log(persona1);
persona1.saludar();