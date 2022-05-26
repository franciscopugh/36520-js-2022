class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInformacion() {
        return `
            <div id="producto${this.id}" class="card border-secondary mb-3" style="max-width: 20rem; margin: 4px;">
                <div class="card-header">${this.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">Marca: ${this.marca}</h4>
                        <p class="card-text">Precio: ${this.precio}</p>
                        <p class="card-text">Stock: ${this.stock}</p>
                        <button class="btn btn-secondary" > Comprar </button>
                </div>
            </div>
        `
    }
}

const producto1 = new Producto(1, "Notebook", "Lenovo", 120000, 20)
const producto2 = new Producto(2, "Celular", "Samsung", 70000, 25)
const producto3 = new Producto(3, "Televisor", "LG", 60000, 22)
const producto4 = new Producto(4, "XBOX One", "Microsoft", 90000, 30)
const producto5 = new Producto(5, "Microfono", "Razer", 30000, 15)
const producto6 = new Producto(6, "Mouse", "Logitech", 2000, 40)
const producto7 = new Producto(7, "Teclado", "Redragon", 8000, 15)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

export default productos