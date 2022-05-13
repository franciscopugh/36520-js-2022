/*function saludar(mensaje = "Hola", numero = 1) {
    
    console.log( numero)
    return (`Hola, este es el mensaje de Pepito: ${mensaje}`)
}

let mensaje = saludar("Que pasen un lindo dia", -4)

console.log(mensaje)

parseFloat()

let IVA = 1.21
const precio = 400

function calcularImpuestos(precio,IVA) {
    //IVA = 1.30 //IVA = 1.30
    return precio * IVA
}

console.log(IVA)
console.log(calcularImpuestos(100, IVA))
console.log(IVA)

function suma(num1, num2) {
    return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

function multiplicacion(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

const suma = function(num1,num2) {return num1 + num2}
const resta = function(num1,num2) {return num1 - num2}
const multiplicacion = function(num1,num2) {return num1 * num2}
const division = function(num1,num2) {return num1 / num2}
*/

const suma = (num1,num2) => num1 + num2
const resta = (num1,num2) => num1 - num2
const multiplicacion = (num1,num2) => num1 * num2
const division = (num1,num2) => num1 / num2

//suma = (num1,num2) => num1 * num2
let num1, num2, operacion

do {
    num1 = parseFloat(prompt("Ingrese un numero"))
    num2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion matematica (+,-,*,/)")

    if(isNaN(num1) || isNaN(num2)) 
        alert("Por favor ingrese un numero valido")
    if(num2 === 0  && operacion == "/")
        alert("No se puede dividir entre cero")
}while((isNaN(num1) || isNaN(num2)) || (num2 === 0 && operacion == "/"))

if(operacion == "+") {
    alert(`El resultado de la suma es: ${suma(num1,num2)}`)
} else if(operacion == "-") {
    alert(`El resultado de la resta es: ${resta(num1,num2)}`)
} else if(operacion == "*") {
    alert(`El resultado de la multiplicacion es: ${multiplicacion(num1,num2)}`)
} else if(operacion == "/") {
    alert(`El resultado de la division es: ${division(num1,num2)}`)
} else {
    alert("Operacion no valida")
}




