/*let numero = 5

// == valor 5 y "5" verdadero
// === valor y tipo falso


if(numero == "Hola") {
    console.log("Verdadero")
    console.log("Hola")
} else {
    console.log("Falso")
}


if("0" == []) { // "0" == 0
    console.log("V")
} else {
    console.log("F")
}

let numero = 4

if(numero % 2) {
    console.log("Numero impar")
} else {
    console.log("Numero par")
    
}

if(0) {
    console.log("V")
} else {
    console.log("F")
}

if(undefined) {
    console.log("V")
} else {
    console.log("F")
}


let precio = parseFloat(prompt("Ingrese un precio"))

/*
    !  a
    F  V
    V  F   


let estaCaro = (precio >= "5000")
let estaPrecio = (precio >= 2000)
let estaRegalado = (precio >= 1)

if(!isNaN(precio)) { 
    if(estaCaro) { //==
        alert("Dale, vuelvo en un rato")
    } else if(estaPrecio) {
        alert("Genial, esta en buen precio")
    } else if(estaRegalado){
        alert("Esta regalado")
    } else {
        alert("Precio incorrecto")
    }
} else {
    alert("Numero incorrecto")
}

let numero1 = 5
let numero2 = 7

//== sea Verdadero, != falso
//=== sea Verdadero, !== falso
if(numero1 !== numero2) {
    console.log("V")
} else {
    console.log("F")
}

if(numero1 == 5 && numero2 == 7) {
    console.log("V")
} else {
    console.log("F")
}

/*
    numero1     &&      numero2
    V            V           V
    V            F           F
    F            F           V
    F            F           F



if(numero1 == 5 || numero2 == 6) {
    console.log("V")
} else {
    console.log("F")
}

/*
    numero1     ||      numero2
    V            V           V
    V            V           F
    F            V           V
    F            F           F

*/

let nota = parseInt(prompt("Ingrese una nota"))

if(!isNaN(nota) && nota >= 1 && nota <= 10) {
    if(nota <= 5) {
        alert("Alumno/a desaprobado/a")
    } else if(nota <= 7) { //nota === 6 || nota === 7 nota>=6 && nota <=7
        alert("Alumno/a aprobado/a nota nota de Bien")
    } else if(nota <= 9) {
        alert("Alumno/a aprobado/a nota nota de Muy Bien")
    } else {
        alert("Alumno/a aprobado/a nota nota de Excelente")
    }
} else {
    alert("Nota no valida")
}