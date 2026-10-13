const persona = {
  apellidos: "Munayco Magallanes",
  nombres: "Daniel",
  hablar: function(){return"Hola que tal"},
  locacion: {
    departamento: "ICA",
    provincia: "Chincha",
    distrito: "Grocio Prado",
    direccion: "Calle San Martin 123",
    mostrar: function(){
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`
    }
  }
}
console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())