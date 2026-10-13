//formas de crear una funcion
function hacerAlgo(){
  return "resultado"

}

//por expresión 
const saludo = function saludar(){
  return "Hola que tal "
}

console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}
console.log(suma(17, 20))

const mensaje = function (){
  return "Ingeniería de software"
}

console.log(mensaje)//tipo de dato => fuction 
console.log(mensaje());//Ejecuta la función



//AUTOEJECUTaBLES (se declaran y se ejecutan al mismo tiempo). no olvidar;
(
  function (){
    console.log("Hola que tal");
  }
)();

(
  function (nombre = ''){
    console.log('Bienvenido:', nombre)
  }
)('Katherine');

//Crea una funcion autoejecutable que calcule el promedio de 3 notas 
(
  function (nota1,nota2,nota3){
    console.log((nota1+nota2+nota3) /3)
  }
)(14, 12, 20);
