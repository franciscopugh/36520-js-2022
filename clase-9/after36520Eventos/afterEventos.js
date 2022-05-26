
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento 
en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
*/




function holaComision36520(){
  alert("Hola chicos")
  console.log("Hola comi 36520");
}
function saludarAlumno(nombre="alumno coder"){
  alert(`Hola ${nombre}`)
}
const holaComi = ()=>{alert("Hola chicos")
console.log("Hola comi 36520");}

const eventoSemantico = document.getElementById("evento-semantico")

// eventoSemantico.onclick = holaComision36520
const nombreInput = document.getElementById("nombre")
eventoSemantico.onclick = ()=>{saludarAlumno(nombreInput.value)}

const eventoMultiple = document.getElementById("evento-multiple")

eventoMultiple.addEventListener('click', holaComision36520)
eventoMultiple.addEventListener('click', function() {saludarAlumno("Cesar")})

eventoMultiple.addEventListener("click", (e)=>{
  //Por consola leemos algunos datos del eventos en sí
  console.log(e);
  console.log(e.type);
  console.log(e.target);
})


class Producto {
  constructor(id, precio, nombre, stock) {
      this.id = id;
      this.precio = precio;
      this.nombre = nombre;
      this.stock = stock;
  }
}

const alfajorJorgito = new Producto(1, 100, "Jorgito", 30)
const oreo = new Producto(2, 130, "Galletita Oreo", 70)
const picoDulce= new Producto(3, 60, "Chupetín Pico Dulce", 20)
const alfajorGuaymallen= new Producto(4, 80, "Alfajor Guaymallen", 100)
const kiosko = [alfajorJorgito, oreo, picoDulce, alfajorGuaymallen]


const containerObjetos = document.getElementById("containerObjetos")

for(let elemento of kiosko){
  
  containerObjetos.innerHTML += `
      <div class="card" id="${elemento.id}" style="width: 18rem; margin:5px">
          <div class="card-body">
              <h5 class="card-title">Nombre ${elemento.nombre}</h5>
              <p class="card-text"><strong>Precio ${elemento.precio}</strong></p>
              <p class="card-text">Stock ${elemento.stock}</p>
              <button id="btnComprar${elemento.id}" class="btn btn-success mb-4 comprar">Comprar dulce</button> 
             <button id="btnEliminar${elemento.id}" class="btn btn-danger mb-2 eliminar">Eliminar dulce</button> 
          </div>
      </div>
  
  `

}
for (let elemento of kiosko){
    let btnCompra = document.getElementById(`btnComprar${elemento.id}`)
     console.log(btnCompra);
     btnCompra.addEventListener("click", ()=>{console.log(`Usted ha comprado el producto ${elemento.nombre}`);})
    
    let cardId = document.getElementById(`${elemento.id}`)
    let btnEliminar = document.getElementById(`btnEliminar${elemento.id}`)
    btnEliminar.addEventListener("click", () => cardId.remove())

}













