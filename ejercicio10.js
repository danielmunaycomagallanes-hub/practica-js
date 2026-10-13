//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}

let perfil = {
    apellido: "Munayco Magallanes",
    nombres: "Daniel",
    edad: 18,
    telefono: ["922650615","956333000","956777000"],
   formacion: [
    { nivel: "Primaria", nombre: "San José", anio: 2000 },
    { nivel: "Secundaria", nombre: "JPB", anio: 2005 },
    { nivel: "Superior", nombre: "SENATI", anio: 2010 }
],

habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
    { skill: "Lenguajes programación", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
    { skill: "Sistemas iperativos", herramientas: ["Windows","Linux","Android"] }
  ]
}

// Habilidades en programación 
console.log(perfil.habilidades[1])

//¿Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefono.length)

//Mostrar cada uno de los motores de base de datos 
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
})