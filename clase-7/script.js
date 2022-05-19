/*const IVA = 1.21
function impuestos (impuesto = "Extraordinario") { 
    let valorImpuesto = 1.10

    if(impuesto == "IVA") {
        valorImpuesto = IVA
    } 

    if(impuesto == "Dolar") {
        valorImpuesto = 1.65
    }

    return (producto) => parseInt((producto * valorImpuesto) - producto)
/*
    switch(impuesto) {
        case "IVA":
            return (producto) => producto * IVA
        case "Dolar": 
            return (producto) => producto * 1.65
        default:
            return (producto) => producto * 1.10
    }
}


let impuestoIVA = impuestos("IVA")
let impuestoDolar = impuestos("Dolar")
let impuestoExtraordinario = impuestos()

console.log(impuestoIVA(100))
console.log(impuestoDolar(100))
console.log(impuestoExtraordinario(100))

function calcularTodosImpuestos(valorDolar, valorIva, valorExtraordinario, producto) {
    return (producto + valorDolar + valorIva + valorExtraordinario)
}

let resultado = calcularTodosImpuestos(impuestoDolar(100), impuestoIVA(100), impuestoExtraordinario(100), 100)

console.log(resultado)*/

import personas from './Clases.js'

/*personas.forEach(persona => {
    console.log(persona)
})

console.log(personas.find(persona => persona.sueldo == 10000))
let personasFiltradas = personas.filter(persona => persona.sueldo > 10000 && persona.edad < 30 )

if(personasFiltradas.length != 0) {
    console.log(personasFiltradas)
} else {
    console.log("No se encontraron personas")
}

console.log(personas.some(persona => persona.edad < 40))

console.log(personas.map(persona => persona.edad))
console.log(personas.map(persona => persona = {sueldo: persona.sueldo, edad: persona.edad}))

const sueldos = personas.map(persona => persona.sueldo)

console.log(sueldos)

console.log(sueldos.reduce((prev, act) => prev - act, 0))

console.log(personas.map(persona => persona.sueldo).reduce((prev, act) => prev + act, 0))*/


let arrayOrdenado = [...personas]

console.log(arrayOrdenado.sort((a,b) => {
    if(a.nombre > b.nombre) {
        return 1
    }

    if(a.nombre < b.nombre) {
        return -1
    }

    return 0
})) // 1 0 -1

