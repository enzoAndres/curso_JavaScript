// //funciones y metodos
// //capacidades que tienen las funciones al igual que otros objetos
// //1.- pasar funciones como como argumento --> callBack
// function a () {}
// function b (a) {}
// b (a) 
// //retornar funciones
// function a (){
//     function b (){}
//     return b;
// }
// //asignar funciones a variables
// const a = function () {}

// //pueden tener propiedades y  metodos
// function a () {}
// const obj = {}
// a.call(obj);

// //anidar funciones --> nested function

// function a (){
//     function b (){
//         function c (){

//         }
//         c();
//     }
//     b();
    
// }
// a();

//Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcone 9',
    launchMenssaje: function launchMenssaje (){
        console.log('🔥');
    }
}
rocket.launchMenssaje();
