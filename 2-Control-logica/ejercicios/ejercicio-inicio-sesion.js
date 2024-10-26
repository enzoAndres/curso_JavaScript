/*
requerimientos del reto 

1.- El usuario debe poder ingresar su usuario y contraseña
2.- El sistema debe ser capaz de validar si el usuario y contraseña
ingresados por el usuario existen en la base de datos 
3.-si el usuario y contraseña son correctos, el sistema debe mostrar
un  mensaje de bienvenida  y mostrar el timeline del usuario
4.- si el usuario y contraseña  son incorrectos, el sistema debe mostrar 
un mensaje de error y  no mostrar  ningun timeline

*/

const usersDatabase = [
    {
        usuario : 'enzo',
        contrasena : '123'
    },
    {
        usuario : 'andres',
        contrasena : '456'
    },
    {
        usuario : 'gaspar',
        contrasena : '789'
    }
];

const usersTimeline = [
    {
        usuario : 'Enzo',
        timeline : "Me encanta js 1"
    },
    {
        usuario : 'Andres',
        timeline : "Me encanta js 2"
    },
    {
        usuario : 'Gaspar',
        timeline : "Me encanta js 3"
    }
];

const username = prompt('¿Cual es tu usuario?');
const password = prompt('¿Cual es tu contraseña?');


function usuarioExistente (username, password) {
    for(let i = 0; i < usersDatabase.length; i++){
        if((username === usersDatabase[i].usuario) && (password === usersDatabase[i].contrasena)){
            //console.log('Es correcto');
            return true;
        } 
    } 
    return false;
}

function signIn (username, password) {
    if(usuarioExistente (username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
        alert("Ups! usuario o contraseña incorrecto");
    }
}
//usuarioExistente(username, password);
signIn(username, password);