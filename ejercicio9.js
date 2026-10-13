let edades = [42, 19, 55, 31, 28, 47, 60, 23, 36, 51, 18, 44, 29, 58, 33]

//Más alto, más bajo, promedio
let mayor = 0, menor = edades[0], promedio = 0

edades.forEach(edad => {
    if (edad > mayor) mayor = edad
    if (edad < menor) menor = edad
    promedio += edad
})

promedio = (promedio / edades.length).toFixed(2)

console.log("Total de edades:", edades.length)
console.log("La mayor edad:", mayor)
console.log("La menor edad:", menor)
console.log("El promedio:", promedio)