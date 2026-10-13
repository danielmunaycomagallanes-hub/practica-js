//Función 1:
// crear una funcion que reciba un arreglo de números y retorne como resultado 
//un objeto indicándonos cuántos valores son pares e impares 
function contarParesImpares(numeros = []){
    let pares = 0;
    let impares = 0;

    numeros.forEach(numero => {
        if(numero % 2 == 0){
            pares++;
        }else{
            impares++;
        }
    });

    return{
        pares: pares,
        impares: impares
    };
}

//console.log(contarParesImpares([1, 2, 3, 4, 5, 6]));

//funcion 2:
//escribir una función que retorne true| false dependiendo si valor de entrada
//corresponde aun numero capicúa 121, 444, 3223. solo permite analizar valores
//de hasta 5 digitos (99999)

function esCapicua(numero = 0) {
    if (numero < 0 || numero > 99999){
    return false;
}
const texto = String(numero);
let invertido = "";
texto.split("").forEach(digito => {
    invertido = digito + invertido;
});

return texto == invertido;
}

console.log(esCapicua(222));
console.log(esCapicua(132));