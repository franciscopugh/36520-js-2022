/*console.log(document.getElementById('parrafo1'))
console.log(document.getElementsByClassName('divParrafos')[0].children[0])
console.log(document.getElementsByTagName('p')[0])

let divParrafos = document.getElementById('idDivParrafos')

for(let parrafo of divParrafos.children) {
    console.log(parrafo)
}

let parrafo4 = document.getElementById('parrafo4')

parrafo4.innerText += "Buenos dias!"

let divParrafos = document.getElementById('idDivParrafos')

let parrafo = document.createElement('p')

parrafo.id = "parrafo5"
parrafo.innerText = "Buenos dias!"
parrafo.className = "parrafos"

divParrafos.prepend(parrafo)

//divParrafos.removeChild(parrafo)

//divParrafos.innerHTML = ""
let parrafo1 = document.getElementById('parrafo1')

parrafo1.remove()
//divParrafos.innerHTML += "<p> Buenos dias a todos! </p>"

console.log(document.querySelector('.divParrafos'))
console.log(document.querySelectorAll('.divParrafos'))*/

class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto("Arroz", "Arrozin", 120, 10)
const producto2 = new Producto("Cafe", "Cafecin", 420, 20)
const producto3 = new Producto("Fideos", "Fidein", 80, 15)
const producto4 = new Producto("Te", "Tecin", 150, 22)
const producto5 = new Producto("Alfajor", "Alfajin", 40, 50)
const producto6 = new Producto("Lentejas", "Lentejin", 140, 12)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

let divProductos = document.getElementById('divProductos')

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <p class="card-text">$${producto.precio}</p>
                <button class="btn btn-danger" id="boton${indice}">Eliminar</button>
            </div>
        </div>
    `
})

productos.forEach((producto, indice) => {
    console.log(document.getElementById(`producto${indice}`).lastElementChild.lastElementChild)
    console.log(document.getElementById(`boton${indice}`))
    console.log(document.querySelectorAll('.btn-danger')[indice])
})