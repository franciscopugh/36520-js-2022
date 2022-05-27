/*let numero = 5

if(numero == 5) {
    console.log("Numero igual a 5")
} else {
    console.log("Numero no es igual a 5")
}

(numero == 5) ? console.log("Numero igual a 5") : console.log("Numero no es igual a 5")


let desayuno = "Cafe"


if(desayuno == "Cafe") {
    console.log("Desayuno cafe con leche")
} else if(desayuno == "Te") {
    console.log("Desayuno te con leche")
} else {
    console.log("Desayuno mate cocido con leche")
}

(desayuno == "Cafe") ? console.log("Desayuno cafe con leche") : (desayuno == "Te") ? console.log("Desayuno te con leche") : console.log("Desayuno mate cocido con leche") 

let operacion = "+"

let resultado = (operacion == "+") ? (() => (5 + 5))() : () => 5-5

console.log(resultado)

console.log(0 || null)
console.log(false ?? undefined)


let nombres = ["Pamela", "Maria", "Franco", "Diego"]

let persona = nombres.find(persona => persona == "Maria") ?? "La persona no existe en el array"

console.log(persona)


let personas = JSON.parse(localStorage.getItem("Personas")) ?? []



let producto = []


console.log(producto?.nombre ?? null)


const persona1 = {
    n: "Francisco",
    a: "Pugh",
    s: 40000,
    aa: 2.0
}

let {n: nombre, a: apellido, s: sueldo, aa: altura} = persona1

//let
nombre == "Eduardo"
console.log(sueldo)

console.log(persona1)

function desestructurar ({n: nombre = "Propiedad", a: apellido}) {
    console.log(nombre)
    console.log(apellido)
}

desestructurar(persona1)
*/
let nombres = ["Pamela", "Maria", "Franco", "Diego", "Daniel"]

/*let [,,c,,e] = nombres

console.log(e)
console.log(c)*/

console.log(...nombres)


let numeros = [5,10,40,45,2,10,56]

console.log(Math.max(...numeros))

const persona1 = {
    nombre: "Hernan",
    apellido: "Hernandez"
}

const persona2 = {
    ...persona1,
    edad: 20,
    sueldo: 40000
}

console.log(persona2)

function sumar(...numeros) {
    console.log(numeros)
    console.log(numeros[0].reduce((prev, sig) => prev + sig, 0))
}

sumar([5,10,40,50])