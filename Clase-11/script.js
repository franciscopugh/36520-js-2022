import productos from './Producto.js'

let productosCarrito = []

if(localStorage.getItem('carrito')) {
    productosCarrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
}

let divProductos = document.getElementById('divProductos')
let botonCarrito = document.getElementById('botonCarrito')
let modalBody = document.getElementsByClassName('modal-body')[0]

productos.forEach((producto) => {
    divProductos.innerHTML += producto.mostrarInformacion()
})

productos.forEach((producto) => {
    document.getElementById(`producto${producto.id}`).lastElementChild.lastElementChild.addEventListener('click', () => {
        const productosCarrito = JSON.parse(localStorage.getItem('carrito'))

        let indice = productosCarrito.findIndex(productoC => productoC.id == producto.id)

        if(indice != -1) {
            if(productosCarrito[indice].cant < producto.stock) {
                productosCarrito[indice].cant++
                localStorage.setItem('carrito', JSON.stringify(productosCarrito))
            }
            
        } else {
            let prodCarrito = {id: producto.id, cant: 1}
            productosCarrito.push(prodCarrito)
            localStorage.setItem('carrito', JSON.stringify(productosCarrito))
        }
    })
})

botonCarrito.addEventListener('click', () => {
    const pc = JSON.parse(localStorage.getItem('carrito'))
    let acumulador = 0
    modalBody.innerHTML = ""
    if(pc.length != 0) {
        pc.forEach(prodCarrito => {

            const prodRef = productos.find(producto => producto.id == prodCarrito.id)
            acumulador += prodRef.precio * prodCarrito.cant
            modalBody.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
            </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${prodRef.nombre}</h5>
              <p class="card-text">Precio: $${prodRef.precio}</p>
              <p class="card-text">Cantidad: ${prodCarrito.cant}</p>
            </div>
          </div>
        </div>
      </div>
        `

        })
        
      modalBody.innerHTML += `Precio total $${acumulador}`
       
    } else {
        modalBody.innerHTML = "<p>No hay productos en el carrito</p>"
    }
})