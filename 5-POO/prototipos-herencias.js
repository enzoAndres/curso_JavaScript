/*
js
funciona con objetos y prototipos

poo
funciona con objetos y herencias

prototipos y herencia

clases 
    metodo
    propiedades

prototipo
    metodos
    propiedades

*/

class Animal {
    constructor(p_nombre, p_tipo) {
        this.nombre = p_nombre;
        this.tipo =  p_tipo;
    }
    emitirSonido(){
        console.log('El animal emite un sonido');
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, p_raza){
        super(nombre, tipo);
        this.raza = p_raza;
    }
    emitirSonido() {
        console.log('El perro ladra');
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
} 

const perro1 = new Perro('Shena', 'Perro', 'Pitbull');
console.log(perro1);
perro1.emitirSonido();
perro1.correr();

perro1.nuevoMetodo = function () {
    console.log("Este es un nuevo metodo");
}

perro1.nuevoMetodo();

Perro.prototype.segundoNuevoMetodo = function () {

    console.log("es un segundo nuevo metodo");

}

perro1.segundoNuevoMetodo();
