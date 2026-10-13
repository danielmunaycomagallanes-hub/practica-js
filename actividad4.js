//Funcion 3:
//crear una funcion que solicite dos arreglos numericos, devera
// retornar la suma de ambos arreglos siempre que tengan el mismo número 
//de elementos, de lo contrario, devolvera array vacío []

function sumarArreglos(arreglo1 = [], arreglo2 = []){
    if (arreglo1.length > arreglo2.length){
        return[];
    }
    if(arreglo2.length > arreglo1.length){
        return[];
    }
    let resultado= [];
    arreglo1.forEach((numero, indice)=>{
        resultado.push(numero + arreglo2[indice]);
    });
    return resultado;
}

//console.log(sumarArreglos([1, 2, 3,], [4, 5, 6]))

//función 4
// Crear una función que solicite un número positivo y retorne todos los divisores 
//de 5 desde 1 hasta el número que hayas indicado. El resultado se obtiene 
//como arreglo 

function divisoresDe5(numero = 0) {
    let resultado = [];

    for (let i = 1; i <= numero; i++){
        if (5 % i == 0){
            resultado.push(i);
        }
    }
    return resultado;
    //for (let i = 1; i <= numero; i++){
        //if (numero % i == 0){
        //    resultado.push(i);
       // }
    //}
    return resultado;
}

console.log(divisoresDe5(16));