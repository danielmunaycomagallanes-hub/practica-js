const paises = [
    ["Perú", "Brasil", "Argentina","Colombia"], // América
    ["España", "Francia", "Italia","Alemania"], // Europa
    ["Japón", "China", "Corea del Sur", "Taiwan"], // Asia
    ["Egipto", "Sudáfrica", "Marruecos", "Kenia"] // África
];
//mostrar los paises de asia(unicamente )utilizando foreach 
paises[2].forEach(pais  =>{
    console.log(pais)
});

//agregar 2 paises en la tierra de América
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("------------ ")

// mostrar los paises de América
paises[0].forEach(pais  =>{
    console.log(pais)
});