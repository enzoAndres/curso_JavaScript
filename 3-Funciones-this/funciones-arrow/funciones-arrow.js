//funciones arrow
const saludo = function (name){
    return `Hola, ${name} `;
}

//arrow funcion - explicito return
const nuevoSaludo = (name) => {
    return `Hola, ${name}`;
}

//arrow funcon  - implicito retunr
const nuevoSaludoImplicito = name => `Hola, ${name}`;
const nuevoSaludoImplicitoConParametros = (name, lastName) => `Hola, soy ${name} ${lastName}`;

//lexical bilding

const functionalCaracter = {
    name: 'Tio Ben',
    mensajeConTradicionalFuncion: function (message) {
        console.log(`${this.name} dice: ${message}`);
    },
    mensajeConArrowFuncion: (message) => {
        console.log(` ${functionalCaracter.name} dice: ${message}`);   
    }   
}

functionalCaracter.mensajeConTradicionalFuncion('Un gran poder conlleva una gran responsabilidad.');
functionalCaracter.mensajeConArrowFuncion('Cuidado con el doctor Octopus');


  
  