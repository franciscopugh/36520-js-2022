/*let indice = 5

for(let i = indice; i < 11;i++) { //i += 1  i = i + 1
    console.log(i)
}

for(let i = 1; i <= 10; i++) {

    if(i == 7) {
        continue
    } 
    
    if(i % 2 == 0) {
        console.log(i + " es numero par")
    } else {
        console.log(`${i} es numero impar`) 
    }

    
}

function esPrimo(numero) {
    let banderita = true
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) {
            banderita = false
            break
        }
    }

    return banderita
}

for(let i = 2; i < 100; i++) {
    if(esPrimo(i)) {
        console.log(`${i} es numero primo`)
    } 
}

let repetir = true

while(repetir) {
    let nombre = prompt("Ingrese un nombre")
    console.log(nombre)
    let consulta = prompt("¿Desea ingresar otro nombre?").toLowerCase()

    if(consulta == 'no') {
        repetir = false
        //break
    }
}


let nombre

do {
    nombre = prompt("Ingrese un nombre")
    console.log(nombre)
    let consulta = prompt("¿Desea ingresar otro nombre?").toLowerCase()
    var repetir = true
    if(consulta == 'no') {
        repetir = false
    }
} while(repetir != false)

console.log(nombre)*/

let numero1,numero2,operacion

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion matematica (+,-,*,/)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }

    if(numero2 == 0 && operacion == "/") {
        alert("No se puede dividir entre cero")
    }

}while((isNaN(numero1) || isNaN(numero2)) || (numero2 == 0 && operacion == "/"))

function mostrar() {
    switch(operacion) {
        case "+":
            alert(numero1 + numero2)
            break
        case "-":
            alert(numero1 - numero2)
            break
        case "*":
            alert(numero1 * numero2)
            break
        case "/":
            alert(numero1 / numero2)
            break
        default:
            alert("Operacion no valida")
            break
    }
}
