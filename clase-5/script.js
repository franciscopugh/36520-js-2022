/*let persona1 = {
    nombre : "Francisco",
    apellido: "Pugh",
    cargo: "Profesor"
}

const persona2 = {
    nombre : "Gonzalo",
    apellido: "Ledesma",
    cargo: "Tutor",
    edad: 20
}

persona1 = persona2

let mostrarEdad = () => console.log("Hola")
mostrarEdad = () => console.log("Chau")

console.log(persona1)
console.log(persona1.nombre)
persona2.altura = 190

console.log(persona1["nombre"])
console.log(persona2)
Object.freeze(persona1)

if(delete persona2.edad) {
    console.log("V")
} else {
    console.log("F")
}

persona1 = persona2

console.log(persona1)
persona2.nombre = "Gonza"
console.log(persona2)

function Producto (nombre, marca, precio, stock) {
    this.nombre = `${nombre} ${marca}`
    this.marca = marca
    this.precio = precio
    this.stock = stock
    this.categoria = 1
    this.modificarStock = (nuevoStock) => this.stock -= nuevoStock
    
}

const producto1 = new Producto("Yerba Mate", "La Yerbita", 450, 20)

for(let propiedad in producto1) {
    console.log(producto1[propiedad])
}

console.log(Object.entries(producto1))



console.log(producto1)
producto1.modificarStock(10)
console.log(producto1)*/

class Animal {
    constructor(nombre, peso = 3, color = "Gris") {
        this.nombre = nombre
        this.peso = peso
        this.color = color
    }

    mostrarDatos() {
        console.log(`${this.nombre} - ${this.peso} - ${this.color}`)
    }
}

class Gato extends Animal {
    constructor(nombre, peso, color, raza, edad) {
        super(nombre, peso, color)
        this.raza = raza
        this.edad = edad
    }

    maulla() {
        console.log("Miauuu")
    }
}

class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    saludar() {
        console.log("Hola")
    }
}

const animal1 = new Animal("Felipe", "Persa")

console.log(animal1)

for(let propiedad in animal1) {
    console.log(animal1[propiedad])
}

console.log(Object.entries(animal1))

const gato1 = new Gato("Copito de Nieve", 5, "Blanco", "Persa", 4)
const persona1 = new Persona("Fran")
gato1.color = persona1.saludar
gato1.color()
gato1.maulla = 100
console.log(gato1.maulla)

