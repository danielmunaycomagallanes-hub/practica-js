let frutas = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Fresa",
  "Uva",
  "Mango",
  "Piña",
  "Sandía",
];

//mostrar la lista invertida (ultimo al primero)

for (let i = (frutas.length - 1); i > frutas.length; i--){
  //console.log(frutas[i])
}


let frutaBuscada ="Piña"
 const resultado = frutas.find(fruta => fruta == "frutaBuscada")
 const encontrado = frutas.includes(frutaBuscada)
 console.log(resultado, encontrado)