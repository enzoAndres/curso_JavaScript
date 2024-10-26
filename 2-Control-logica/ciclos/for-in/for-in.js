/* 
for in principalmente lo utilizamos para poder iterar sobre objetos enumerables
popiedades = valor 
for in --> objetos
array, string 

for (variable in objeto){
    
    codigo ejecutar

}

*/
const listaDeCompras = {
    'Manzana': 5,
    'Pera': 3,
    'Naranjas': 2,
    'Uva': 9,
    }

    for (fruta in listaDeCompras){
        console.log(fruta);
    }

    for (fruta in listaDeCompras){
        console.log(`${fruta} : ${listaDeCompras[fruta]}`)
    }

    for (fruta of listaDeCompras){
        console.log(fruta);
    }