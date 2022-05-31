/*setTimeout(() => {
    console.log("Buenos dias!.")
}, 3000)

const timeOut = setTimeout(() => {
    console.log("Buenas tardes!.")
}, 2999)

setTimeout(() => {
    console.log("Buenas noches!.")
}, 2999)

clearTimeout(timeOut)

let i = 0
const interval = setInterval(() => {
    i++
    console.log(i)
    console.log(interval)
    if (i == 5) {
        clearInterval(interval)
    }
}, 1000)

class Empleado {
    constructor(id, nombre, apellido, sueldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }
}

const empleado1 = new Empleado(1, "Pancho", "Panchas", 10000)
const empleado2 = new Empleado(2, "Maria", "Martez", 14000)
const empleado3 = new Empleado(3, "Carlos", "Cabezas", 12000)
const empleado4 = new Empleado(4, "Sandra", "Salinas", 11000)

const empleados = [empleado1, empleado2, empleado3, empleado4]

function consultaPromesa(valor) {
    return new Promise((res, rej) => {
        if(valor == true) {
            res(empleados)
        } 
        rej("No tiene los permisos necesarios para hacer esta consulta")
    })
}

consultaPromesa(true)
.then(promesa => console.log(promesa))
.catch(error => console.error(error))
.finally(() => console.log("Consulta terminada"))*/

let divDolar = document.getElementById('divDolar')

const interval = setInterval(() => {
    fetch("https://criptoya.co/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, ccl, mep, ccb, blue}) => {

    divDolar.innerHTML = `
        <p>Oficial: $${oficial}</p>
        <p>Solidario: $${solidario}</p>
        <p>CCL: $${ccl}</p>
        <p>CCB: $${ccb}</p>
        <p>Mep: $${mep}</p>
        <p>Blue: $${blue}</p>
    `
    })
    .catch(error => {
        console.error(error)
        clearInterval(interval)
    })
}, 3000)

fetch("https://clientes.api.greenborn.com.ar/public-random-word?l=5")
.then(response => response.json())
.then(data => console.log(data))