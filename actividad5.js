//Crear una funcion autoejecutable, que imprima cuantas horas minutos y segundos
//faltan para terminar el dia
(function(){
    const ahora = new Date();

    let segundosRestantes = 
    86400-
    (ahora.getHours()* 3600 +
        ahora.getMinutes() * 60 +
        ahora.getSeconds());
        
    const horas = Math.floor(segundosRestantes / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = segundosRestantes % 60;
    console.log(
        "Faltan " + horas + " horas, " + 
        minutos + "minutos y " + 
        segundos + "segundos para terminar el día."
    );
})();

//Crear una funcion autoejecutable que solicite un numero (Expresado en segundos ) y nos 
//devuelva un saludo, despues del tiempop indicado (settimeowt)

const readline = require("readline");

(function (){
    const entrada = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    entrada.question("¿Cuántos segundos debo esperar?", function  (respuesta){
        const segundos = Number (respuesta);

        setTimeout(function (){
            console.log("¡Hola! ya pasó el tiempo indicado.");
            entrada.close();
        },segundos * 1000);
    });
})();