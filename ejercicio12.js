//Que es un funcion?
//Conjunto de instrucciones que se pueden reutilizar
//Acepta parametros de salida y puede devolver algun valor (opcional)
function saludar(){
  console.log("Hola")
}

function despedirse(){
  return "Adios"
}

function verificarNota(calificacion = 0){
  //aprobado - desaprobado | operador ternario (condicion simple)
  return (calificacion >= 10.5 ? "aprobado" : "desaprobado")
}

//La funcion retorna el neto , incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

// >= 65 "Jubilación activa", contrario , "fase laboral"
function verificarJubilacion(edad){
// condicion ? valor_cumple : valor_no_cumple
return edad >= 65 ? "jubilacion activa" : "fase laboral"
  
}

//Esta funcion recibe una lista de sueldos (no sabemois la cantidfad de elementos)
//tambien se debe indicar si obtendramos el mayor
//la funcion retorna el mayor o menor sueldo dependidno de su configuracion
function analizarSueldos(listaSueldos = [], obtenerMayor = true){
  let resultado = 0

  if (obtenerMayor){
  listaSueldos.forEach(sueldo => {
    if (sueldo > resultado) resultado = sueldo
  })
}else{
  resultado = listaSueldos[0]
  listaSueldos.forEach(sueldo => {
    if (sueldo < resultado) resultado = sueldo
  })
}
return resultado
}

function obtenerTelefonos(obejto = {}){
  return obejto.telefonos
}

//Retornar un obejton con los parametros
function crearObjeto(apellidos= '', nombres = '', edad = 0){
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad
  }
}

saludar()
console.log(despedirse())
console.log(verificarNota(16))
console.log (calcularNeto(3500, 0)) // 3500 + 300
console.log(verificarJubilacion(45))
console.log(analizarSueldos([3500, 1800, 4100, 2200], false)) // 4100


const perfil = {
  nombres: "Luis mateo",
  dni: "1234567",
  telefonos: ["926414160","931679185"]
}
console.log(obtenerTelefonos(perfil))
console.log(crearObjeto('Martin Perez', 'Luis Miguel', 20))