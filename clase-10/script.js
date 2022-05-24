/*localStorage.setItem('producto', "Arroz")
//sessionStorage.setItem('Saludar', "Hola")

localStorage.setItem('producto', "Fideos")

let valor = localStorage.getItem('productos')

console.log(valor)

let darkMode

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}

if(darkMode == 'dark') {
    document.body.classList.add("darkMode")
}


let botonDarkMode = document.getElementById('botonDarkMode')
let botonLightMode = document.getElementById('botonLightMode')

botonDarkMode.addEventListener('click', () => {
   //document.body.style.backgroundColor = "#000000"
   // document.body.style.color = "#ffffff"
    document.body.classList.add("darkMode")
    localStorage.setItem('darkMode', 'dark')
})

botonLightMode.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#ffffff"
    //document.body.style.color = "#000000"
    document.body.classList.remove("darkMode")
    localStorage.setItem('darkMode', 'light')
})*/

class Cliente {
    constructor(id, nombre, apellido, dni, email, sueldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.sueldo = sueldo;
    }

    saludar() {
        console.log("Hola")
    }
}
/*
const cliente1 = new Cliente (1, "Maria", "Mariales", 123123, "Maria@maria.com", 16000)
const cliente2 = new Cliente(2, "Lautaro", "Lopez", 456456, "l@l.com",13000)
const cliente3 = new Cliente(3, "Claudia", "Caseros", 789678, "c@c.com", 17000)

const clientes = [cliente1, cliente2, cliente3]
                                    //Pasar Objeto a JSON
localStorage.setItem('clientes', JSON.stringify(clientes))
            //Pasar JSON a Objeto
console.log(JSON.parse(localStorage.getItem('clientes')))*/

let formProducto = document.getElementById('formProducto')
let productos = []

if(localStorage.getItem('productos')){
    productos = JSON.parse(localStorage.getItem('productos'))
} else {
    localStorage.setItem('productos', JSON.stringify(productos))
}


formProducto.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)

    const producto = {nombre: datForm.get('nombre'), marca: datForm.get('marca'), precio: datForm.get('precio'), stock: datForm.get('stock')}

    productos.push(producto)

    localStorage.setItem('productos', JSON.stringify(productos))
})


