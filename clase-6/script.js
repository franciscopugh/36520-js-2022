/*const array = ["Hola", "Chau", 1,true]

const array2 = [3,5]

array2.push(...array)
array2.unshift(...array)
array2[0] = "Hola Coders"
console.log(array)
console.log(array2)


array2[array] = "Buenos dias"
array2[-Infinity - 50] = "Infinito"

console.log(array2.shift())
console.log(array2.pop())
array2.splice(-Infinity, 1)
//delete array2[-Infinity]

console.log(array2[{nombre: "F", apellido: "P"}])

console.log(array2)

for(let i = -1; i < array2.length; i++) {
    console.log(array2[i])
}


const personas1 = ["Juan", "Migu,el", "Maria", "Lu,cas", "A,na", "Lucia", "Paola"]
for (let i = 0; i < personas1.length; i++) {
    //personas[i].replace(',', "*")
    personas1[i] = personas1[i].replace(',','')
} 

const personas2 = ["Hector", "Manuel"]
const personas3 = personas1

console.log(personas3)
//personas[10000] = "Francisco"
personas1.splice(0,1)

 

console.log(personas1.join('-'))
console.log(personas1.slice(2,5))


let nombreABuscar = prompt("Ingrese un nombre a buscar")

let indice = personas1.indexOf(nombreABuscar)

if(indice != -1) {
    //let personaEliminada = personas1.splice(indice,1)
    //console.log(`Usuario ${personaEliminada} eliminado`)
    console.log(personas1[indice])
} else {
    console.log("Usuario no encontrado")
}

console.log(personas1.includes("Francisco"))
console.log(personas1.reverse())
console.log(personas1)*/

class Persona {
    constructor(nombre, apellido, edad, peso) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.peso = peso
    }
}

const persona1 = new Persona("Francisco", "Pugh", 50, 70)
const persona2 = new Persona("Gonzalo", "Ledesma", 20, 71)
const persona3 = new Persona("Alfredo", "Jesus", 21, 72)

const personas = [persona1, persona2, persona3]

const persona5 = {
    ...persona1,
    personasArray: personas
}
console.log(persona5)
let {nombre, apellido, edad, peso, personasArray} = persona5

let resultado = personas.map(persona => ({...persona}))
console.log(resultado)

const persona4 = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    peso: peso,
    personas: {...personasArray}
}

//const persona4 = Object.assign({}, persona1)
console.log(persona4)
persona1.nombre = "Pedro"
console.log(persona4)
/*
for(let persona of personas) {
    console.log(persona)
}

personas.forEach((persona,indice,array) => {
    console.log(persona)
    console.log(indice)
    console.log(array)
})*/