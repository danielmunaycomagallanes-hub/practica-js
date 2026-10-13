const alimentos = [
  ["manzana", "plátano", "naranja", "fresa", "mango"], // Frutas
  ["zanahoria", "lechuga", "brócoli", "espinaca"], // Vegetales
  ["pollo", "res", "cerdo"], // Carnes
  ["arroz", "avena"], // Cereales
];

// ¿Cuántos elementos tiene la matriz?
console.log("Cantidad de arreglos:", alimentos.length);

// ¿Cuál es el array que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
});
console.log("Array más grande contiene:", mayor)
// ¿Cuál es el array que tiene menos datos?
let menor  = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length < menor){
    menor = categoriaAlimentos-length
  }
})
console.log("Array más pequeño contiene:", menor)

// ¿Cuántos elementos en total tiene la matriz?

let sumatoria = 0 
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
})
console.log("En total tenemos:", sumatoria, "alimentos")